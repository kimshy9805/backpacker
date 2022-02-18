package api

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"kay.backpacker/model"
)

func (h *apiHandler) userHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	if r.Method == http.MethodGet {
		v := ctx.Value("user")
		user := v.(*model.Authorization).User

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
	} else if r.Method == http.MethodPut {
		user := &model.User{}
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()

		if err := decoder.Decode(&user); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		v := ctx.Value("user")
		user.UserId = v.(*model.Authorization).User.UserId
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

	verb := mux.Vars(r)["verb"]

	if r.Method == http.MethodPost {
		if err := h.processor.ProcessUserTransition(ctx, verb); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// encoder := json.NewEncoder(w)
		// encoder.Encode(user)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}

}
