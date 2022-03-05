package api

// func (h *apiHandler) commentsHandler(w http.ResponseWriter, r *http.Request) {
// 	_, err := h.accessControl(r)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusForbidden)
// 		return
// 	}

// 	// Retrieve all comments by tweet id
// 	if r.Method == http.MethodPost {
// 		params := make(map[string]interface{})
// 		decoder := json.NewDecoder(r.Body)
// 		defer r.Body.Close()

// 		if err := decoder.Decode(&params); err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}

// 		tweetId := h.processor.ConvertToInt(params["tweet_id"])
// 		comments, err := h.repo.GetCommentsByTweetId(tweetId, nil)
// 		if err != nil {
// 			http.Error(w, err.Error(), http.StatusBadRequest)
// 			return
// 		}

// 		encoder := json.NewEncoder(w)
// 		encoder.Encode(comments)
// 		w.Header().Set("Content-Type", "application/json")
// 		w.WriteHeader(http.StatusOK)
// 	} else {
// 		w.WriteHeader(http.StatusMethodNotAllowed)
// 	}
// }

// func (h *apiHandler) commentHandler(w http.ResponseWriter, r *http.Request) {
// 	ctx, err := h.accessControl(r)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusForbidden)
// 		return
// 	}

// 	// Retrieve a comment
// 	if r.Method == http.MethodGet {
// 		params := make(map[string]interface{})
// 		decoder := json.NewDecoder(r.Body)
// 		defer r.Body.Close()

// 		if err := decoder.Decode(&params); err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}

// 		commentId := h.processor.ConvertToInt(params["comment_id"])
// 		comment, err := h.repo.GetComment(commentId, nil)
// 		if err != nil {
// 			http.Error(w, err.Error(), http.StatusBadRequest)
// 			return
// 		}

// 		encoder := json.NewEncoder(w)
// 		encoder.Encode(comment)
// 		w.Header().Set("Content-Type", "application/json")
// 		w.WriteHeader(http.StatusOK)

// 		// Create a comment
// 	} else if r.Method == http.MethodPost {
// 		comment := &model.Comment{}
// 		decoder := json.NewDecoder(r.Body)
// 		defer r.Body.Close()

// 		if err := decoder.Decode(&comment); err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}
// 		if err := h.processor.ProcessCommentCreate(ctx, comment); err != nil {
// 			http.Error(w, err.Error(), http.StatusBadRequest)
// 			return
// 		}
// 		id, err := h.repo.CreateComment(comment, nil)

// 		if err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}
// 		comment.CommentId = id

// 		encoder := json.NewEncoder(w)
// 		encoder.Encode(comment)
// 		w.Header().Set("Content-Type", "application/json")
// 		w.WriteHeader(http.StatusCreated)

// 		// Update a comment
// 	} else if r.Method == http.MethodPut {
// 		comment := &model.Comment{}
// 		decoder := json.NewDecoder(r.Body)
// 		defer r.Body.Close()

// 		if err := decoder.Decode(comment); err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}
// 		if err := h.repo.UpdateComment(comment, nil); err != nil {
// 			http.Error(w, err.Error(), http.StatusBadRequest)
// 			return
// 		}

// 		dbComment, err := h.repo.GetComment(comment.CommentId, nil)
// 		if err != nil {
// 			http.Error(w, err.Error(), http.StatusInternalServerError)
// 			return
// 		}
// 		encoder := json.NewEncoder(w)
// 		encoder.Encode(dbComment)
// 		w.Header().Set("Content-Type", "application/json")
// 		w.WriteHeader(http.StatusOK)
// 	} else {
// 		w.WriteHeader(http.StatusMethodNotAllowed)
// 	}
// }

// func (h *apiHandler) myCommentsHandler(w http.ResponseWriter, r *http.Request) {
// 	ctx, err := h.accessControl(r)
// 	if err != nil {
// 		w.WriteHeader(http.StatusForbidden)
// 		return
// 	}

// 	// Retrieve my tweets
// 	if r.Method == http.MethodGet {
// 		v := ctx.Value("user")
// 		if v == nil {
// 			http.Error(w, "Only for a user", http.StatusForbidden)
// 			return
// 		}

// 		user := v.(*model.Authorization).User
// 		tweets, err := h.repo.GetMyTweets(user.UserId, nil)
// 		if err != nil {
// 			http.Error(w, err.Error(), http.StatusBadRequest)
// 			return
// 		}

// 		encoder := json.NewEncoder(w)
// 		encoder.Encode(tweets)
// 		w.Header().Set("Content-Type", "application/json")
// 		w.WriteHeader(http.StatusOK)
// 	} else {
// 		w.WriteHeader(http.StatusMethodNotAllowed)
// 	}
// }
