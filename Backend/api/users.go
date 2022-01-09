package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
	"kay.backpacker/model"
)

func (h *apiHandler) userHandler(w http.ResponseWriter, r *http.Request) {
	if _, err := h.accessControl(r); err != nil {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	idString := mux.Vars(r)["id"]
	id, err := strconv.ParseInt(idString, 10, 64)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if r.Method == http.MethodGet {
		user, err := h.repo.GetUser(id, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(user)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else if r.Method == http.MethodPost {
		user := &model.User{}
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()

		if err := decoder.Decode(&user); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		if err := h.processor.ProcessUserCreate(user); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		id, err := h.repo.CreateUser(user, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		user.UserId = id

		token := &model.Token{}
		token.UserId = id
		if err := h.processor.ProcessTokenCreate(token); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if _, err = h.repo.CreateToken(token, nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(user)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte(fmt.Sprintf(`{"id": %d}`, id)))
	} else if r.Method == http.MethodPut {
		user := &model.User{}
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()

		if err := decoder.Decode(&user); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		user.UserId = id
		if err := h.repo.UpdateUser(user, nil); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) userStateHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	idString := mux.Vars(r)["id"]
	verb := mux.Vars(r)["verb"]
	id, err := strconv.ParseInt(idString, 10, 64)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	if r.Method == http.MethodPut {
		user, err := h.repo.GetUser(id, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		if err := h.processor.ProcessUserTransition(ctx, user, verb); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(user)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

}