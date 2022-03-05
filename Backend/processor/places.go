package processor

import (
	"context"
	"errors"

	"kay.backpacker/config"
	"kay.backpacker/model"
)

func (p *processor) ProcessPlaceTransition(ctx context.Context, params map[string]interface{}, verb string) (interface{}, error) {
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
