package model

import (
	"time"

	"gopkg.in/guregu/null.v4"
)

var (
	location = time.Now().Location()
)

type User struct {
	UserId    int64       `json:"user_id"`
	Email     string      `json:"email"`
	Password  string      `json:"password"`
	Name      null.String `json:"name"`
	Status    string      `json:"status"`
	CreatedAt null.Time   `json:"created_at"`
}

type Token struct {
	TokenId   int64     `json:"token_id"`
	UserId    int64     `json:"user_id"`
	Value     string    `json:"value"`
	Status    string    `json:"status"`
	CreatedAt null.Time `json:"created_at"`
	ExpiredAt null.Time `json:"expired_at"`
}

type Authorization struct {
	User  *User
	Token *Token
}
