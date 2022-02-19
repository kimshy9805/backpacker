package api

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
	"kay.backpacker/model"
)

func (h *apiHandler) tweetsHandler(w http.ResponseWriter, r *http.Request) {
	_, err := h.accessControl(r)
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
	} else {
		w.WriteHeader(http.StatusMethodNotAllowed)
	}
}

func (h *apiHandler) tweetHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusForbidden)
		return
	}

	// Retrieve a tweet
	if r.Method == http.MethodGet {
		params := make(map[string]interface{})
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()

		if err := decoder.Decode(&params); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		tweetId := h.processor.ConvertToInt(params["tweet_id"])
		tweet, err := h.repo.GetTweet(tweetId, nil)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		encoder := json.NewEncoder(w)
		encoder.Encode(tweet)
		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)

		// Create a tweet
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

		// Update a tweet
	} else if r.Method == http.MethodPut {
		tweet := &model.Tweet{}
		decoder := json.NewDecoder(r.Body)
		defer r.Body.Close()
		if err := decoder.Decode(tweet); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		if err := h.repo.UpdateTweet(tweet, nil); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		dbTweet, err := h.repo.GetTweet(tweet.TweetId, nil)
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

		result, err := h.processor.ProcessTweetTransition(ctx, params, verb)
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
