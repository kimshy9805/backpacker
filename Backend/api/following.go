package api

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"kay.backpacker/model"
)

func (h *apiHandler) myFollowersHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	if r.Method == http.MethodGet {
		v := ctx.Value("user")
		user := v.(*model.Authorization).User

		followers, err := h.repo.GetMyFollowers(user.UserId, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(followers)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) myFollowingsHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	// Retrieve my tweets
	if r.Method == http.MethodGet {
		v := ctx.Value("user")
		user := v.(*model.Authorization).User

		followings, err := h.repo.GetMyFollowings(user.UserId, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(followings)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) followingStateHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		w.WriteHeader(http.StatusForbidden)
		return
	}

	verb := mux.Vars(r)["verb"]

	if r.Method == http.MethodPost {
		params := make(map[string]interface{})
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()
		if err := decoder.Decode(&params); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		result, err := h.processor.ProcessFollowingTransition(ctx, params, verb)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		resp := &Resp{Error: nil, Data: result}
		encoder := json.NewEncoder(w)
		encoder.Encode(resp)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}
