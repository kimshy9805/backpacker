package client

import (
	"net/http"

	"github.com/gorilla/websocket"
	"kay.backpacker/model"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

type Client interface {
}

type client struct {
	// conn *websocket.Conn
	repo model.Repository
}

func NewClient(repo model.Repository) Client {
	return &client{
		// conn: conn,
		repo: repo,
	}
}
