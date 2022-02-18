package processor

import (
	"time"

	"github.com/google/uuid"
	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (p *processor) ProcessTokenCreate(token *model.Token) error {
	token.Value = uuid.NewString()
	token.Status = "ACTIVE"
	token.CreatedAt = null.NewTime(time.Now(), true)
	token.ExpiredAt = null.NewTime(time.Now().Add(time.Minute*30), true)

	return nil
}

func (p *processor) ProcessTokenTransition(token *model.Token, verb string) error {

	switch verb {
	case config.STATE_TOKENS_EXPIRED:
		token.Status = "EXPIRED"
	case config.STATE_TOKENS_ACTIVE:
		token.Status = "ACTIVE"
	}

	return nil
}
