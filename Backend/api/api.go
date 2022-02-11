package api

import (
	"github.com/gorilla/mux"
	"kay.backpacker/config"
	"kay.backpacker/model"
	"kay.backpacker/processor"
)

// api object
type apiHandler struct {
	router    *mux.Router
	processor processor.Processor
	client    *WsServer
	repo      model.Repository
}

func RegisterAPI(r *mux.Router, mysqlConfig *config.MysqlConfig) {
	// Initiate ws server in a Go routine
	wsServer := NewWebsocketServer()
	go wsServer.Run()

	repo := model.InitDB(mysqlConfig)

	h := &apiHandler{
		router:    r,
		processor: processor.NewProcessor(repo),
		client:    wsServer,
		repo:      repo,
	}

	registerBackend(r, h)
}
