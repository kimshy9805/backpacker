package model

import (
	"database/sql"
	"strings"

	"kay.backpacker/config"
)

func scanTweet(tweet *Tweet) []interface{} {
	return []interface{}{
		&tweet.TweetId,
		&tweet.UserId,
		&tweet.Status,
		&tweet.Content,
		&tweet.Details,
		&tweet.CreatedAt,
		&tweet.UpdatedAt,
	}
}

func scanTweetExtra(tweet *Tweet) []interface{} {
	return []interface{}{
		&tweet.TweetId,
		&tweet.UserId,
		&tweet.Status,
		&tweet.Content,
		&tweet.Details,
		&tweet.CreatedAt,
		&tweet.UpdatedAt,
		&tweet.LikesCount,
		&tweet.CommentsCount,
	}
}

func (r *repository) readTweets(rows *sql.Rows, tx *Tx, twType string) ([]*Tweet, error) {
	tweets := make([]*Tweet, 0)

	for rows.Next() {
		tweet := &Tweet{}
		// Perform scan based on type
		switch twType {
		case config.TWEET_DEFAULT:
			if err := rows.Scan(scanTweet(tweet)...); err != nil {
				return nil, err
			}
			break
		case config.TWEET_API:
			if err := rows.Scan(scanTweetExtra(tweet)...); err != nil {
				return nil, err
			}
			break
		default:
			return nil, sql.ErrNoRows
		}
		tweets = append(tweets, tweet)
	}

	// For join operation
	for _, tweet := range tweets {
		tweet.User, _ = r.GetUser(tweet.UserId, tx)
	}

	return tweets, nil
}

func (r *repository) CreateTweet(tweet *Tweet, tx *Tx) (int64, error) {
	result, err := r.getDb(tx).Exec(`INSERT INTO tweets (user_id, status, content, details, created_at, updated_at) 
										  VALUES(?, ?, ?, ?, ?, ?)`, tweet.UserId, tweet.Status, tweet.Content, tweet.Details, tweet.CreatedAt, tweet.UpdatedAt)
	if err != nil {
		return -1, err
	}

	return result.LastInsertId()
}

func (r *repository) GetTweet(id int64, tx *Tx) (*Tweet, error) {
	tweet := &Tweet{}
	err := r.getDb(tx).QueryRow(`SELECT * 
								   FROM tweets 
								  WHERE tweet_id = ?`, id).Scan(scanTweet(tweet)...)
	if err != nil {
		return nil, err
	}

	tweet.User, _ = r.GetUser(tweet.UserId, tx)
	return tweet, nil
}

func (r *repository) GetTweets(tx *Tx) ([]*Tweet, error) {
	rows, err := r.getDb(tx).Query(`SELECT t.*,
									(SELECT COUNT(*) FROM likes l WHERE l.tweet_id = t.tweet_id) AS likes_count,
									(SELECT COUNT(*) FROM comments c WHERE c.tweet_id = t.tweet_id) AS comments_count
									  FROM tweets t
									 LIMIT 50`)
	if err != nil {
		return nil, err
	}

	return r.readTweets(rows, tx, config.TWEET_API)
}

func (r *repository) GetMyTweets(userId int64, tx *Tx) ([]*Tweet, error) {
	rows, err := r.getDb(tx).Query(`SELECT * 
									  FROM tweets 
									 WHERE user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	return r.readTweets(rows, tx, config.TWEET_DEFAULT)
}

func (r *repository) GetTweetsByUserId(userId int64, tx *Tx) ([]*Tweet, error) {
	rows, err := r.getDb(tx).Query(`SELECT * 
									  FROM tweets 
								     WHERE user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	return r.readTweets(rows, tx, config.TWEET_DEFAULT)
}

func (r *repository) UpdateTweet(tweet *Tweet, tx *Tx) error {
	columns := make([]string, 0)
	values := make([]interface{}, 0)

	columns = append(columns, `status = ?`)
	values = append(values, tweet.Status)

	columns = append(columns, `content = ?`)
	values = append(values, tweet.Content)

	// columns = append(columns, `details = ?`)

	columns = append(columns, `updated_at = ?`)
	values = append(values, tweet.UpdatedAt)

	if len(columns) > 0 {
		if _, err := r.getDb(tx).Exec(`UPDATE tweets SET `+strings.Join(columns, ", ")+`WHERE tweet_id = ?`, values...); err != nil {
			return err
		}
	}
	return nil
}
