package model

import (
	"database/sql"
	"fmt"
	"strings"
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
		&tweet.User,
	}
}

func readTweets(rows *sql.Rows) ([]*Tweet, error) {
	tweets := make([]*Tweet, 0)
	for rows.Next() {
		tweet := &Tweet{}
		if err := rows.Scan(scanTweet(tweet)...); err != nil {
			return nil, err
		}
		tweets = append(tweets, tweet)
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

func (r *repository) GetTweets(tx *Tx) ([]interface{}, error) {
	rows, err := r.getDb(tx).Query(`SELECT t.tweet_id, t.user_id, t.content, t.details, t.created_at, t.updated_at, u.name, u.email
									  FROM tweets t
									  JOIN users u
									    ON t.user_id = u.user_id
									 LIMIT 50`)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	columns, _ := rows.Columns()
	count := len(columns)
	values := make([]interface{}, count)
	valuePtrs := make([]interface{}, count)
	results := make([]interface{}, 0)
	for rows.Next() {
		for i := range columns {
			valuePtrs[i] = &values[i]
		}

		rows.Scan(valuePtrs...)
		var result []interface{}
		for i, col := range columns {
			val := values[i]

			b, ok := val.([]byte)
			var v interface{}
			if ok {
				v = string(b)
			} else {
				v = val
			}
			result = append(result, col, v)
		}
		results = append(results, result)
	}

	fmt.Println(results)

	return results, nil
	// return readTweets(rows)
}

// func (r *repository) GetTweets(tx *Tx) ([]*Tweet, error) {
// 	rows, err := r.getDb(tx).Query(`SELECT t.tweet_id, t.user_id, t.content, t.details, t.created_at, t.updated_at, u.name, u.email,
// 									(SELECT COUNT(*) FROM likes l WHERE l.tweet_id = t.tweet_id) AS likes_cnt,
// 									(SELECT COUNT(*) FROM comments c WHERE c.tweet_id = t.tweet_id) AS comments_cnt
// 									  FROM tweets t
// 									  JOIN users u
// 									    ON t.user_id = u.user_id
// 									 LIMIT 50`)
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer rows.Close()
// 	columns, _ := rows.Columns()
// 	count := len(columns)
// 	values := make([]interface{}, count)
// 	valuePtrs := make([]interface{}, count)
// 	results := make([]interface{}, 0)
// 	for rows.Next() {
// 		for i := range columns {
// 			valuePtrs[i] = &values[i]
// 		}

// 		rows.Scan(valuePtrs...)

// 		for i, col := range columns {
// 			val := values[i]

// 			b, ok := val.([]byte)
// 			var v interface{}
// 			if ok {
// 				v = string(b)
// 			} else {
// 				v = val
// 			}

// 			fmt.Println(col, v)
// 		}
// 	}

// 	fmt.Println(results)

// 	return nil, nil
// 	// return readTweets(rows)
// }

func (r *repository) GetMyTweets(userId int64, tx *Tx) ([]*Tweet, error) {
	rows, err := r.getDb(tx).Query(`SELECT * 
									  FROM tweets 
									 WHERE user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	return readTweets(rows)
}

func (r *repository) GetTweetsByUserId(userId int64, tx *Tx) ([]*Tweet, error) {
	rows, err := r.getDb(tx).Query(`SELECT * 
									  FROM tweets 
								     WHERE user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	return readTweets(rows)
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
