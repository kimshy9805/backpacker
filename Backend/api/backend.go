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
	router.HandleFunc("/users/{id:[0-9]+}", h.userHandler)
	router.HandleFunc("/users/{id:[0-9]+}/{verb}", h.userStateHandler)

	// Tweets
	router.HandleFunc("/tweet/{id:[0-9]+}", h.tweetHandler)
	router.HandleFunc("/tweets", h.tweetsHandler)
	router.HandleFunc("/tweets/me", h.myTweetsHandler)
	router.HandleFunc("/tweet/{verb}", h.tweetStateHandler)

	// Comments
	router.HandleFunc("/comment/{id:[0-9]+}", h.commentHandler)
	router.HandleFunc("/comments", h.commentsHandler).Queries("tweet", "{[0-9]*?}")
	router.HandleFunc("/comments/me", h.myCommentsHandler)

	// Follow
	router.HandleFunc("./followers/me", h.myFollowersHandler)
	router.HandleFunc("./follwings/me", h.myFollowingsHandler)
	router.HandleFunc("/follow/{verb}", h.followStateHandler)
}
