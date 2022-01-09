package api

import (
	"github.com/gorilla/mux"
)

// 05 Sep 2021
// Handle incoming api requests
func registerBackend(router *mux.Router, h *apiHandler) {
	// Users
	router.HandleFunc("/users/{id:[0-9]+}", h.userHandler)
	router.HandleFunc("/users/{id:[0-9]+}/{verb}", h.userStateHandler)

	// Tweets
	router.HandleFunc("/tweet/{id:[0-9]+}", h.tweetHandler)
	router.HandleFunc("/tweets", h.tweetsHandler)
	router.HandleFunc("/tweets/me", h.myTweetsHandler)

	// router.HandleFunc("/tweet")
}
