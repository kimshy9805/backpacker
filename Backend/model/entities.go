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
	UserId    int64           `json:"user_id"`
	Email     string          `json:"email"`
	Password  string          `json:"password"`
	Name      null.String     `json:"name"`
	Details   json.RawMessage `json:"details"`
	Status    string          `json:"status"`
	CreatedAt null.Time       `json:"created_at"`
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
	Content   null.String     `json:"content"`
	Details   json.RawMessage `json:"details,omitempty"`
	CreatedAt null.Time       `json:"created_at"`
	UpdatedAt null.Time       `json:"updated_at"`

	// for API
	LikesCount    null.Int `json:"likes_count"`
	CommentsCount null.Int `json:"comments_count"`
	// for Join
	User *User `json:"user"`
}

type Comment struct {
	CommentId int64           `json:"comment_id"`
	UserId    int64           `json:"user_id"`
	TweetId   int64           `json:"tweet_id"`
	Status    string          `json:"status"`
	Content   null.String     `json:"content"`
	Details   json.RawMessage `json:"details, omitempty"`
	CreatedAt null.Time       `json:"created_at"`
	UpdatedAt null.Time       `json:"updated_at"`

	// for API

	// for Join
	User  *User  `json:"user"`
	Tweet *Tweet `json:"tweet"`
}

type Authorization struct {
	User  *User
	Token *Token
}
