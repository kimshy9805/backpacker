package processor

import (
	"context"

	"kay.backpacker/model"
)

type processor struct {
	repo model.Repository
}

type Processor interface {
	// Custom Conversion methods
	ConvertToIntArray(src []interface{}) []int64
	ConvertToStringArray(src []interface{}) []string
	ConvertToInt(src interface{}) int64

	// Tokens
	ProcessTokenCreate(token *model.Token) error
	ProcessTokenTransition(token *model.Token, verb string) error

	// Users
	ProcessUserCreate(user *model.User) error
	ProcessUserTransition(ctx context.Context, verb string) error

	// Following
	ProcessFollowingTransition(ctx context.Context, params map[string]interface{}, verb string) (interface{}, error)

	// Tweets
	ProcessTweetCreate(ctx context.Context, tweet *model.Tweet) error
	ProcessTweetTransition(ctx context.Context, params map[string]interface{}, verb string) (interface{}, error)
}

func NewProcessor(repo model.Repository) Processor {
	return &processor{
		repo: repo,
	}
}

func (p *processor) ConvertToIntArray(src []interface{}) []int64 {
	ar := make([]int64, len(src))
	for i := range src {
		ar[i] = int64(src[i].(float64))
	}
	return ar
}

func (p *processor) ConvertToStringArray(src []interface{}) []string {
	ar := make([]string, len(src))
	for i := range src {
		ar[i] = src[i].(string)
	}
	return ar
}

// iff coming from api body
func (p *processor) ConvertToInt(src interface{}) int64 {
	val := int64(src.(float64))
	return val
}
