package processor

import (
	"context"
	"time"

	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (p *processor) ProcessUserCreate(user *model.User) error {
	user.Status = "ACTIVE"
	user.CreatedAt = null.NewTime(time.Now(), true)
	return nil
}

func (p *processor) ProcessUserTransition(ctx context.Context, user *model.User, verb string) error {
	switch verb {
	case config.STATE_USERS_ACTIVE:
	}

	return nil
}
