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
}

func NewProcessor(repo model.Repository) Processor {
	return &processor{
		repo: repo,
	}
}
