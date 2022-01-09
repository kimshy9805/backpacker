package processor

import (
	"context"

	"kay.backpacker/model"
)

type processor struct {
	repo model.Repository
}

type Processor interface {
	// Tokens
	ProcessTokenCreate(token *model.Token) error
	ProcessTokenTransition(token *model.Token, verb string) error

	// Users
	ProcessUserCreate(user *model.User) error
	ProcessUserTransition(ctx context.Context, user *model.User, verb string) error

	// Tweets
	ProcessTweetCreate(ctx context.Context, tweet *model.Tweet) error
	ProcessTweetTransition(ctx context.Context, tweet *model.Tweet, verb string) error
}

func NewProcessor(repo model.Repository) Processor {
	return &processor{
		repo: repo,
	}
}
