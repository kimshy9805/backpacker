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

func (p *processor) ProcessTweetTransition(ctx context.Context, params interface{}, verb string) error {

	var user *model.User
	v := ctx.Value("user")
	if v != nil {
		user = v.(*model.Authorization).User
	}

	switch verb {
	case config.ACTION_TWEET_DELETE:
		tweetId := params.(int64)
		tweet, err := p.repo.GetTweet(tweetId, nil)
		if err != nil {
			return err
		}
		tweet.Status = "DELETED"
		tweet.UpdatedAt.Time = time.Now()
		if err := p.repo.UpdateTweet(tweet, nil); err != nil {
			return err
		}
		break
	case config.ACTION_TWEET_LIKE:
		tweetId := params.(int64)
		if err := p.repo.LikeTweet(tweetId, user.UserId, nil); err != nil {
			return err
		}
		break
	case config.ACTION_TWEET_UNLIKE:
		tweetId := params.(int64)
		if err := p.repo.UnlikeTweet(tweetId, user.UserId, nil); err != nil {
			return err
		}

		break
	}

	return nil
}
