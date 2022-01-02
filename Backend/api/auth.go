package api

import (
	"context"
	"net/http"

	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (h *apiHandler) accessControl(r *http.Request) (context.Context, error) {
	tokenVal := r.Header.Get("Token")
	token := &model.Token{}

	// Check token
	if tokenVal == "" {
		return nil, nil
	} else {
		var err error
		token, err = h.repo.GetToken(tokenVal, nil)
		if err != nil {
			return nil, err
		}

		// Check status
		if token.Status == config.STATE_TOKENS_EXPIRED {
			token = &model.Token{}
			if err := h.processor.ProcessTokenCreate(token); err != nil {
				return nil, err
			}
			if _, err := h.repo.CreateToken(token, nil); err != nil {
				return nil, err
			}
		}
	}

	// Retrieve user
	user, err := h.repo.GetUser(token.UserId, nil)
	if err != nil {
		return nil, err
	}

	// Return context
	return context.WithValue(context.Background(), "user", &model.Authorization{
		Token: token,
		User:  user,
	}), nil
}
