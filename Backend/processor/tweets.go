package processor

import (
	"context"
	"time"

	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (p *processor) ProcessTweetCreate(ctx context.Context, tweet *model.Tweet) error {
	var user *model.User
	v := ctx.Value("user")
	if v != nil {
		user = v.(*model.Authorization).User
	}

	tweet.UserId = user.UserId
	tweet.Status = "ACTIVE"
	tweet.CreatedAt = null.NewTime(time.Now(), true)
	tweet.UpdatedAt = null.NewTime(time.Now(), true)
	return nil
}

func (p *processor) ProcessTweetTransition(ctx context.Context, tweet *model.Tweet, verb string) error {

	switch verb {
	case config.ACTION_TWEET_DELETE:
		tweet.Status = "DELETED"
		tweet.UpdatedAt.Time = time.Now()
		if err := p.repo.UpdateTweet(tweet, nil); err != nil {
			return err
		}
		break
	case config.ACTION_TWEET_LIKE:
		
	}

	return nil
}
