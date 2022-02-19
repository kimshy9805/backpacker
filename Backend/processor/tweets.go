package processor

import (
	"context"
	"errors"
	"time"

	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (p *processor) ProcessTweetCreate(ctx context.Context, tweet *model.Tweet) error {
	v := ctx.Value("user")
	user := v.(*model.Authorization).User

	tweet.UserId = user.UserId
	tweet.Status = "ACTIVE"
	tweet.CreatedAt = null.NewTime(time.Now(), true)
	tweet.UpdatedAt = null.NewTime(time.Now(), true)
	return nil
}

func (p *processor) ProcessTweetTransition(ctx context.Context, params map[string]interface{}, verb string) (interface{}, error) {
	var user *model.User
	v := ctx.Value("user")
	if v != nil {
		user = v.(*model.Authorization).User
	}

	switch verb {
	case config.ACTION_TWEET_DELETE:
		tweet := &model.Tweet{}
		tweetId := p.ConvertToInt(params["tweet_id"])

		// check if the tweet belongs to a user
		dbTweet, err := p.repo.GetTweet(tweetId, nil)
		if err != nil {
			return nil, err
		}

		if dbTweet.UserId != user.UserId {
			return nil, errors.New("Not a valid user")
		}

		tweet.TweetId = tweetId
		tweet.Status = "DELETED"
		if err := p.repo.UpdateTweet(tweet, nil); err != nil {
			return nil, err
		}
		break
	case config.ACTION_TWEET_LIKE:
		tweetId := p.ConvertToInt(params["tweet_id"])

		if err := p.repo.LikeTweet(user.UserId, tweetId, nil); err != nil {
			return nil, err
		}
		break
	case config.ACTION_TWEET_UNLIKE:
		tweetId := p.ConvertToInt(params["tweet_id"])

		if err := p.repo.UnlikeTweet(user.UserId, tweetId, nil); err != nil {
			return nil, err
		}
		break
	}

	return nil, nil
}

// tweetId := int(params["tweet_id"].(float64))
// ar := p.ConvertToIntArray(params["aaa"].([]interface{}))
// stringAr := p.ConvertToStringArray(params["string"].([]interface{}))
