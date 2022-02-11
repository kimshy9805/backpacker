package api

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/websocket"
	"kay.backpacker/config"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin:     func(r *http.Request) bool { return true },
}

const (
	// Max wait time when writing message to peer
	writeWait = 10 * time.Second

	// Max time till next pong from peer
	pongWait = 60 * time.Second

	// Send ping interval, must be less then pong wait time
	pingPeriod = (pongWait * 9) / 10

	// Maximum message size allowed from peer.
	maxMessageSize = 10000
)

type Client struct {
	conn *websocket.Conn
	// reference to the WsServer for each client
	wsServer *WsServer
	send     chan []byte
	chats    map[*Chat]bool
	Name     string    `json:"name"`
	ID       uuid.UUID `json:"id"`
}

func newClient(conn *websocket.Conn, wsServer *WsServer, name string) *Client {
	return &Client{
		ID:       uuid.New(),
		Name:     name,
		conn:     conn,
		wsServer: wsServer,
		chats:    make(map[*Chat]bool),
	}
}

// allow the creation of Websocket connections
func (h *apiHandler) wsHandler(w http.ResponseWriter, r *http.Request) {
	ctx, err := h.accessControl(r)
	if err != nil {
		http.Error(w, err.Error(), http.StatusForbidden)
		return
	}
	fmt.Println(ctx)

	// http -> ws
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	}
	defer conn.Close()

	name, ok := r.URL.Query()["name"]

	if !ok || len(name[0]) < 1 {
		log.Println("Url Param 'name' is missing")
		return
	}

	// 새로운 socket connection instance를 만듬
	client := newClient(conn, h.client, name[0])

	go client.writePump()
	go client.readPump()
}

func (client *Client) GetName() string {
	return client.Name
}

func (client *Client) handleNewMessage(jsonMessage []byte) {

	var message Message
	if err := json.Unmarshal(jsonMessage, &message); err != nil {
		log.Printf("Error on unmarshal JSON message %s", err)
	}

	// Attach the client object as the sender of the messsage.
	message.Sender = client

	switch message.Action {
	case config.ACTION_MESSAGE_SEND:
		// The send-message action, this will send messages to a specific room now.
		// Which room wil depend on the message Target
		chatName := message.Target
		// Use the ChatServer method to find the room, and if found, broadcast!
		if chat := client.wsServer.findChatByName(chatName); chat != nil {
			chat.Broadcast <- &message
		}
	// We delegate the join and leave actions.
	case config.ACTION_CHAT_JOIN:
		client.handleJoinRoomMessage(message)

	case config.ACTION_CHAT_LEAVE:
		client.handleLeaveRoomMessage(message)
	}
}

func (client *Client) handleJoinRoomMessage(message Message) {
	chatName := message.Message

	chat := client.wsServer.findChatByName(chatName)
	if chat == nil {
		chat = client.wsServer.createChat(chatName)
	}

	client.chats[chat] = true

	chat.Register <- client
}

func (client *Client) handleLeaveRoomMessage(message Message) {
	chat := client.wsServer.findChatByName(message.Message)
	if _, ok := client.chats[chat]; ok {
		delete(client.chats, chat)
	}

	chat.Unregister <- client
}

func (client *Client) disconnect() {
	client.wsServer.Unregister <- client
	for chat := range client.chats {
		chat.Unregister <- client
	}
	close(client.send)
	client.conn.Close()
}

func (client *Client) readPump() {
	defer func() {
		client.disconnect()
	}()

	client.conn.SetReadLimit(maxMessageSize)
	client.conn.SetReadDeadline(time.Now().Add(pongWait))
	client.conn.SetPongHandler(func(string) error { client.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })

	// Start endless read loop, waiting for messages from client
	for {
		_, message, err := client.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("unexpected close error: %v", err)
			}
			break
		}

		client.handleNewMessage(message)
	}
}

var (
	newline = []byte{'\n'}
	space   = []byte{' '}
)

func (client *Client) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		client.conn.Close()
	}()
	for {
		select {
		case message, ok := <-client.send:
			client.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				// The WsServer closed the channel.
				client.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			w, err := client.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			w.Write(message)

			// Attach queued chat messages to the current websocket message.
			n := len(client.send)
			for i := 0; i < n; i++ {
				w.Write(newline)
				w.Write(<-client.send)
			}

			if err := w.Close(); err != nil {
				return
			}
		case <-ticker.C:
			client.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := client.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}
