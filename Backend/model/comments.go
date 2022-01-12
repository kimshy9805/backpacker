package model

import (
	"database/sql"

	"kay.backpacker/config"
)

func scanComment(comment *Comment) []interface{} {
	return []interface{}{
		&comment.TweetId,
		&comment.UserId,
		&comment.Status,
		&comment.Content,
		&comment.Details,
		&comment.CreatedAt,
		&comment.UpdatedAt,
	}
}

func scanCommentExtra(comment *Comment) []interface{} {
	return []interface{}{
		&comment.TweetId,
		&comment.UserId,
		&comment.Status,
		&comment.Content,
		&comment.Details,
		&comment.CreatedAt,
		&comment.UpdatedAt,
	}
}

func (r *repository) readComments(rows *sql.Rows, tx *Tx, cmtType string) ([]*Comment, error) {
	comments := make([]*Comment, 0)

	for rows.Next() {
		comment := &Comment{}
		switch cmtType {
		case config.COMMENT_DEFAULT:
			if err := rows.Scan(scanComment(comment)...); err != nil {
				return nil, err
			}
		case config.COMMENT_API:
			if err := rows.Scan(scanCommentExtra(comment)...); err != nil {
				return nil, err
			}
		}
		comments = append(comments, comment)
	}

	// For join operation
	for _, comment := range comments {
		comment.Tweet, _ = r.GetTweet(comment.TweetId, tx)
		comment.User, _ = r.GetUser(comment.UserId, tx)
	}

	return comments, nil
}

func (r *repository) CreateComment(comment *Comment, tx *Tx) (int64, error) {
	result, err := r.getDb(tx).Exec(`INSERT INTO tweets (user_id, status, content, details, created_at, updated_at) 
										  VALUES(?, ?, ?, ?, ?, ?)`, comment.UserId, comment.Status, comment.Content, comment.Details, comment.CreatedAt, comment.UpdatedAt)
	if err != nil {
		return -1, err
	}

	return result.LastInsertId()
}

// func (r *repository) GetComment(id int64, tx *Tx) (*Comment, error) {
// 	comment := &Comment{}
// 	err := r.getDb(tx).QueryRow(`SELECT *
// 								   FROM comments
// 								  WHERE comment_id = ?`, id).Scan(scanComment(comment)...)
// 	if err != nil {
// 		return nil, err
// 	}

// 	comment.User, _ = r.GetUser(comment.UserId, tx)
// 	return tweet, nil
// }

func (r *repository) GetCommentsByTweetId(tweetId int64, tx *Tx) ([]*Comment, error) {
	rows, err := r.getDb(tx).Query(`SELECT * FROM comments WHERE tweet_id = ?`, tweetId)
	if err != nil {
		return nil, err
	}

	return r.readComments(rows, tx, config.COMMENT_DEFAULT)
}

// func (r *repository) GetMyComments(userId int64, tx *Tx) ([]*Tweet, error) {
// 	rows, err := r.getDb(tx).Query(`SELECT *
// 									  FROM tweets
// 									 WHERE user_id = ?`, userId)
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer rows.Close()
// 	return readTweets(rows)
// }

// func (r *repository) GetCommentsByTweetId(userId int64, tx *Tx) ([]*Tweet, error) {
// 	rows, err := r.getDb(tx).Query(`SELECT *
// 									  FROM tweets
// 								     WHERE user_id = ?`, userId)
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer rows.Close()
// 	return readTweets(rows)
// }

// func (r *repository) UpdateComment(tweet *Tweet, tx *Tx) error {
// 	columns := make([]string, 0)
// 	values := make([]interface{}, 0)

// 	columns = append(columns, `status = ?`)
// 	values = append(values, tweet.Status)

// 	columns = append(columns, `content = ?`)
// 	values = append(values, tweet.Content)

// 	// columns = append(columns, `details = ?`)

// 	columns = append(columns, `updated_at = ?`)
// 	values = append(values, tweet.UpdatedAt)

// 	if len(columns) > 0 {
// 		if _, err := r.getDb(tx).Exec(`UPDATE tweets SET `+strings.Join(columns, ", ")+`WHERE tweet_id = ?`, values...); err != nil {
// 			return err
// 		}
// 	}
// 	return nil
// }
