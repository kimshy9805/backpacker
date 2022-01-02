package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"kay.backpacker/api"
	"kay.backpacker/config"
)

// 05 Sep 2021
// main function to run server
func main() {
	// load default configuration
	conf := config.LoadConfig()

	// init mux router
	r := mux.NewRouter()

	api.RegisterAPI(r.PathPrefix("/api").Subrouter(), &conf.MysqlConfig)

	// init server
	srv := &http.Server{
		Handler: r,
		Addr:    fmt.Sprintf("%s:%d", conf.HttpConfig.IP, conf.HttpConfig.Port),
		// Good practice: enforce timeouts for servers you create!
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	fmt.Printf("Listening on %s...\n", srv.Addr)
	log.Fatal(srv.ListenAndServe())
}
