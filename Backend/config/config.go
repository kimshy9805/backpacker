package config

import (
	"encoding/json"
	"io/ioutil"
)

type HttpConfig struct {
	Socket string `json: "socket"`
	IP     string `json: "ip"`
	Port   int    `json: "port"`
}

type MysqlConfig struct {
	Host     string `json:"host"`
	Port     int    `json:"port"`
	Username string `json:"username"`
	Password string `json:"password"`
	Database string `json:"database"`
}

type backendConfig struct {
	HttpConfig  HttpConfig  `json:"http"`
	MysqlConfig MysqlConfig `json:"mysql"`
}

func LoadConfig() *backendConfig {
	config := &backendConfig{}

	raw, err := ioutil.ReadFile("config.json")
	if err != nil {
		panic("Initialize config Failed")
	}

	err = json.Unmarshal(raw, config)
	if err != nil {
		panic(err.Error())
	}

	return config
}
