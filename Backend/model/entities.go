package model

import (
	"encoding/json"
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

type Tweet struct {
	TweetId   int64           `json:"tweet_id"`
	UserId    int64           `json:"user_id"`
	Status    string          `json:"status"`
	Content   string          `json:"content"`
	Details   json.RawMessage `json:"details,omitempty"`
	CreatedAt null.Time       `json:"created_at"`
	UpdatedAt null.Time       `json:"updated_at"`
	// for join
	User *User `json:"user"`
}

type Authorization struct {
	User  *User
	Token *Token
}
