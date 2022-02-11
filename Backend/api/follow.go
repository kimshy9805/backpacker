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

	// Retrieve my tweets
	if r.Method == http.MethodGet {
		v := ctx.Value("user")
		if v == nil {
			http.Error(w, "Only for a user", http.StatusForbidden)
			return
		}

		user := v.(*model.Authorization).User
		tweets, err := h.repo.GetMyTweets(user.UserId, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(tweets)
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
		if v == nil {
			http.Error(w, "Only for a user", http.StatusForbidden)
			return
		}

		user := v.(*model.Authorization).User
		tweets, err := h.repo.GetMyTweets(user.UserId, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(tweets)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) followStateHandler(w http.ResponseWriter, r *http.Request) {
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

		if err := h.processor.ProcessTweetTransition(ctx, params, verb); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		result := &APIResult{msg: "SUCCESS"}
		encoder := json.NewEncoder(w)
		encoder.Encode(result)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}
