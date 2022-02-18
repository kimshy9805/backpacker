package processor

import (
	"context"

	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (p *processor) ProcessFollowingTransition(ctx context.Context, params map[string]interface{}, verb string) (interface{}, error) {
	v := ctx.Value("user")
	user := v.(*model.Authorization).User

	switch verb {
	case config.ACTION_FOLLOWING_FOLLOW:
		followId := p.ConvertToInt(params["follow_id"])

		if err := p.repo.FollowUser(followId, user.UserId, nil); err != nil {
			return nil, err
		}

		return followId, nil

	case config.ACTION_FOLLOWING_UNFOLLOW:
		followId := p.ConvertToInt(params["follow_id"])

		if err := p.repo.UnFollowUser(followId, user.UserId, nil); err != nil {
			return nil, err
		}

		return followId, nil
	}

	return nil, nil
}
