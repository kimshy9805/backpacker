package processor

import (
	"context"
	"time"

	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
	"kay.backpacker/model"
	"kay.backpacker/utils"
)

func (p *processor) ProcessUserCreate(user *model.User) error {
	user.Status = "ACTIVE"
	user.Alias = null.NewString(utils.GetRandomAlias(15), true)

	user.CreatedAt = null.NewTime(time.Now(), true)
	user.UpdatedAt = null.NewTime(time.Now(), true)
	return nil
}

func (p *processor) ProcessUserTransition(ctx context.Context, verb string) error {
	switch verb {
	case config.STATE_USERS_ACTIVE:
	}

	return nil
}
