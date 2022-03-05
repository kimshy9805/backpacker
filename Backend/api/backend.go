package api

import (
	"github.com/gorilla/mux"
)

// 05 Sep 2021
// Handle incoming api requests
func registerBackend(router *mux.Router, h *apiHandler) {
	// Websocket
	router.HandleFunc("/ws", h.wsHandler)

	// Chat
	// router.HandleFunc("/chat", h.chatHandler)
	// router.HandleFunc("/chats/me", h.myChatsHandler)

	// Users
	router.HandleFunc("/user", h.userHandler)
	router.HandleFunc("/users/{verb}", h.userStateHandler)

	// Following
	router.HandleFunc("/followers/me", h.myFollowersHandler)
	router.HandleFunc("/followings/me", h.myFollowingsHandler)
	router.HandleFunc("/following/{verb}", h.followingStateHandler)

	// Tweets
	router.HandleFunc("/tweet", h.tweetHandler)
	router.HandleFunc("/tweets", h.tweetsHandler)
	router.HandleFunc("/tweets/me/{type}", h.myTweetsHandler)
	router.HandleFunc("/tweet/{verb}", h.tweetStateHandler)

	// Places
	router.HandleFunc("/place", h.placeHandler)
	router.HandleFunc("/places", h.placesHandler)
	router.HandleFunc("/places/me", h.myPlacesHandler)

}
