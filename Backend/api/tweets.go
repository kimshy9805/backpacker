package api

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
	"gopkg.in/guregu/null.v4"
	"kay.backpacker/model"
)

func (h *apiHandler) tweetsHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusForbidden)
		return
	}

	// Retrieve all latest tweets
	if r.Method == http.MethodGet {
		tweets, err := h.repo.GetTweets(nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(tweets)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		// Create a new tweet
	} else if r.Method == http.MethodPost {
		tweet := &model.Tweet{}
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()

		if err := decoder.Decode(&tweet); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		if err := h.processor.ProcessTweetCreate(ctx, tweet); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		id, err := h.repo.CreateTweet(tweet, nil)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		tweet.TweetId = id

		encoder := json.NewEncoder(w)
		encoder.Encode(tweet)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusCreated)
		w.Write([]byte(fmt.Sprintf(`{"id": %d}`, id)))
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) tweetHandler(w http.ResponseWriter, r *http.Request) {
	_, err := h.accessControl(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusForbidden)
		return
	}

	idString := mux.Vars(r)["id"]
	id, err := strconv.ParseInt(idString, 10, 64)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// Retrieve a tweet
	if r.Method == http.MethodGet {
		tweets, err := h.repo.GetTweet(id, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(tweets)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)

		// Update a tweet
	} else if r.Method == http.MethodPut {
		tweet := &model.Tweet{}
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()
		if err := decoder.Decode(tweet); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		tweet.TweetId = id
		tweet.UpdatedAt = null.NewTime(time.Now(), true)
		if err := h.repo.UpdateTweet(tweet, nil); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		dbTweet, err := h.repo.GetTweet(id, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		encoder := json.NewEncoder(w)
		encoder.Encode(dbTweet)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) myTweetsHandler(w http.ResponseWriter, r *http.Request) {
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

func (h *apiHandler) tweetStateHandler(w http.ResponseWriter, r *http.Request) {
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

type APIResult struct {
	err error
	msg string
}
