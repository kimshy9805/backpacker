package api

import (
	"encoding/json"
	"fmt"
	"log"

	"kay.backpacker/config"
)

const WELCOME_MSG = "%s joined the chat"

// *Client type만 채널에서 receive and send 가능하게
// map for the Clients registered in the server
type WsServer struct {
	Clients    map[*Client]bool
	Register   chan *Client
	Unregister chan *Client
	Broadcast  chan []byte
	Chats      map[*Chat]bool
}

// 새로운 socket 통신 instance를 return
func NewWebsocketServer() *WsServer {
	return &WsServer{
		Clients:    make(map[*Client]bool),
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Broadcast:  make(chan []byte),
		Chats:      make(map[*Chat]bool),
	}
}

func (server *WsServer) Run() {
	for {
		select {
		case client := <-server.Register:
			server.RegisterClient(client)
		case client := <-server.Unregister:
			server.UnregisterClient(client)
		case message := <-server.Broadcast:
			server.BroadcastToClients(message)
		}
	}
}

func (server *WsServer) RegisterClient(client *Client) {
	server.notifyClientJoined(client)
	server.listOnlineClients(client)
	server.Clients[client] = true
}

func (server *WsServer) UnregisterClient(client *Client) {
	if _, ok := server.Clients[client]; ok {
		delete(server.Clients, client)
		server.notifyClientLeft(client)
	}
}

func (server *WsServer) BroadcastToClients(message []byte) {
	for client := range server.Clients {
		client.send <- message
	}
}

type Chat struct {
	Name       string
	Clients    map[*Client]bool
	Register   chan *Client
	Unregister chan *Client
	Broadcast  chan *Message
}

type Message struct {
	Action  string  `json:"action"`
	Message string  `json:"message"`
	Target  string  `json:"target"`
	Sender  *Client `json:"sender"`
}

func (message *Message) encode() []byte {
	json, err := json.Marshal(message)
	if err != nil {
		log.Println(err)
	}

	return json
}

func (server *WsServer) broadcastToClients(message []byte) {
	for client := range server.Clients {
		client.send <- message
	}
}

func (server *WsServer) notifyClientJoined(client *Client) {
	message := &Message{
		Action: config.ACTION_USER_JOIN,
		Sender: client,
	}

	server.broadcastToClients(message.encode())
}

func (server *WsServer) notifyClientLeft(client *Client) {
	message := &Message{
		Action: config.ACTION_USER_LEFT,
		Sender: client,
	}

	server.broadcastToClients(message.encode())
}

func (server *WsServer) listOnlineClients(client *Client) {
	for existingClient := range server.Clients {
		message := &Message{
			Action: config.ACTION_USER_JOIN,
			Sender: existingClient,
		}
		client.send <- message.encode()
	}
}

func NewChat(name string) *Chat {
	return &Chat{
		Name:       name,
		Clients:    make(map[*Client]bool),
		Register:   make(chan *Client),
		Unregister: make(chan *Client),
		Broadcast:  make(chan *Message),
	}
}

func (chat *Chat) GetName() string {
	return chat.Name
}

// RunRoom runs our room, accepting various requests
func (chat *Chat) RunChat() {

	for {
		select {

		case client := <-chat.Register:
			chat.registerClientInRoom(client)

		case client := <-chat.Unregister:
			chat.unregisterClientInRoom(client)

		case message := <-chat.Broadcast:
			chat.broadcastToClientsInRoom(message.encode())
		}
	}
}

func (chat *Chat) notifyClientJoined(client *Client) {
	message := &Message{
		Action:  config.ACTION_MESSAGE_SEND,
		Target:  chat.Name,
		Message: fmt.Sprintf(WELCOME_MSG, client.GetName()),
	}

	chat.broadcastToClientsInRoom(message.encode())
}

func (chat *Chat) registerClientInRoom(client *Client) {
	chat.notifyClientJoined(client)
	chat.Clients[client] = true
}

func (chat *Chat) unregisterClientInRoom(client *Client) {
	if _, ok := chat.Clients[client]; ok {
		delete(chat.Clients, client)
	}
}

func (chat *Chat) broadcastToClientsInRoom(message []byte) {
	for client := range chat.Clients {
		client.send <- message
	}
}

func (server *WsServer) findChatByName(name string) *Chat {
	var foundChat *Chat
	for chat := range server.Chats {
		if chat.GetName() == name {
			foundChat = chat
			break
		}
	}

	return foundChat
}

func (server *WsServer) createChat(name string) *Chat {
	chat := NewChat(name)
	go chat.RunChat()
	server.Chats[chat] = true

	return chat
}

// type Chat struct {
// 	users    map[string]*User
// 	messages chan *Message
// 	join     chan *User
// 	leave    chan *User
// }

// type Message struct {
// 	ID     int64  `json:"id"`
// 	Body   string `json:"body"`
// 	Sender string `json:"sender"`
// }

// type User struct {
// 	Username string
// 	Conn     *websocket.Conn
// 	Global   *Chat
// }

// func (h *apiHandler) chatHandler(w http.ResponseWriter, r *http.Request) {
// 	ctx, err := h.accessControl(r)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusForbidden)
// 		return
// 	}
// 	fmt.Println(ctx)

// 	// http -> ws
// 	ws, err := upgrader.Upgrade(w, r, nil)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusBadRequest)
// 	}
// 	defer ws.Close()

// 	keys := r.URL.Query()
// 	username := keys.Get("username")
// 	if strings.TrimSpace(username) == "" {
// 		username = fmt.Sprintf("anom-%d", utils.GetRandomI64())
// 	}

// 	c := &Chat{
// 		users:    make(map[string]*User),
// 		messages: make(chan *Message),
// 		join:     make(chan *User),
// 		leave:    make(chan *User),
// 	}

// 	go c.Run()

// 	user := &User{
// 		Username: username,
// 		Conn:     ws,
// 		Global:   c,
// 	}

// 	c.join <- user

// 	user.Read()
// }

// func (h *apiHandler) myChatsHandler(w http.ResponseWriter, r *http.Request) {
// 	ctx, err := h.accessControl(r)
// 	if err != nil {
// 		http.Error(w, err.Error(), http.StatusForbidden)
// 		return
// 	}
// 	fmt.Println(ctx)

// 	if r.Method == http.MethodGet {

// 	}
// }

// func (c *Chat) Run() {
// 	for {
// 		select {
// 		// Receive user from channel
// 		case user := <-c.join:
// 			// add that user to our chat
// 			c.add(user)
// 		case message := <-c.messages:
// 			c.broadcast(message)
// 		case user := <-c.leave:
// 			c.disconnect(user)
// 		}
// 	}
// }

// // Chat에 user 추가
// func (c *Chat) add(user *User) {
// 	if _, ok := c.users[user.Username]; ok {
// 		c.users[user.Username] = user

// 		body := fmt.Sprintf("%s join the chat", user.Username)
// 		c.broadcast(NewMessage(body, "Server"))
// 	}
// }

// func (c *Chat) broadcast(message *Message) {
// 	fmt.Println("Broadcast message: %s", message.Body)
// 	for _, user := range c.users {
// 		user.Write(message)
// 	}
// }

// func (c *Chat) disconnect(user *User) {
// 	fmt.Println("left")
// 	if _, ok := c.users[user.Username]; ok {
// 		defer user.Conn.Close()
// 		delete(c.users, user.Username)
// 		log.Printf("User left the chat: %s, Total: %d\n", user.Username, len(c.users))
// 	}
// }

// // 새로운 chat 실행
// func Start() {
// 	c := &Chat{
// 		users:    make(map[string]*User),
// 		messages: make(chan *Message),
// 		join:     make(chan *User),
// 		leave:    make(chan *User),
// 	}

// 	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
// 		w.Write([]byte("Welcome to Go Webchat!"))
// 	})

// 	go c.Run()
// }

// // 무한 loop 돌면서 message 받으면 Global로 뿌린다. (hub)
// func (u *User) Read() {
// 	for {
// 		if _, message, err := u.Conn.ReadMessage(); err != nil {
// 			log.Printf("Error on read message:")
// 			break
// 		} else {
// 			u.Global.messages <- NewMessage(string(message), u.Username)
// 		}
// 	}

// 	u.Global.leave <- u

// }

// func (u *User) Write(message *Message) {
// 	b, _ := json.Marshal(message)

// 	if err := u.Conn.WriteMessage(websocket.TextMessage, b); err != nil {
// 		log.Printf("Error on write message", err.Error())
// 	}

// }

// func NewMessage(body string, sender string) *Message {
// 	return &Message{ID: utils.GetRandomI64(), Body: body, Sender: sender}
// }
