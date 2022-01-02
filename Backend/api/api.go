package api

import (
	"github.com/gorilla/mux"
	"kay.backpacker/client"
	"kay.backpacker/config"
	"kay.backpacker/model"
	"kay.backpacker/processor"
)
 
// api object
type apiHandler struct {
	router    *mux.Router
	processor processor.Processor
	client    client.Client
	repo      model.Repository
}

func RegisterAPI(r *mux.Router, mysqlConfig *config.MysqlConfig) {
	repo := model.InitDB(mysqlConfig)

	h := &apiHandler{
		router:    r,
		processor: processor.NewProcessor(repo),
		client:    client.NewClient(repo),
		repo:      repo,
	}

	registerBackend(r, h)
}

