package model

import (
	"database/sql"
	"strings"
	"time"

	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
)

func scanComment(comment *Comment) []interface{} {
	return []interface{}{
		&comment.CommentId,
		&comment.TweetId,
		&comment.UserId,
		&comment.Status,
		&comment.Content,
		&comment.Details,
		&comment.CreatedAt,
		&comment.UpdatedAt,
	}
}

func scanCommentAPI(comment *Comment) []interface{} {
	return []interface{}{
		&comment.CommentId,
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
			break
		case config.COMMENT_API:
			if err := rows.Scan(scanCommentAPI(comment)...); err != nil {
				return nil, err
			}
			break
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

func (r *repository) GetComment(id int64, tx *Tx) (*Comment, error) {
	comment := &Comment{}
	err := r.getDb(tx).QueryRow(`SELECT *
								   FROM comments
								  WHERE comment_id = ?`, id).Scan(scanComment(comment)...)
	if err != nil {
		return nil, err
	}
	comment.User, _ = r.GetUser(comment.UserId, tx)
	return comment, nil
}

func (r *repository) GetCommentsByTweetId(tweetId int64, tx *Tx) ([]*Comment, error) {
	rows, err := r.getDb(tx).Query(`SELECT comment_id, tweet_id, user_id, status, content, details, created_at, updated_at
									  FROM comments WHERE tweet_id = ?`, tweetId)
	if err != nil {
		return nil, err
	}
	return r.readComments(rows, tx, config.COMMENT_DEFAULT)
}

func (r *repository) GetMyComments(userId int64, tx *Tx) ([]*Comment, error) {
	rows, err := r.getDb(tx).Query(`SELECT *
									  FROM comments
									 WHERE user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	return r.readComments(rows, tx, config.COMMENT_DEFAULT)
}

func (r *repository) UpdateComment(comment *Comment, tx *Tx) error {
	columns := make([]string, 0)
	values := make([]interface{}, 0)

	if comment.Status != "" {
		columns = append(columns, `status = ?`)
		values = append(values, comment.Status)
	}

	if comment.Content.Valid {
		columns = append(columns, `content = ?`)
		values = append(values, comment.Content)
	}

	if comment.Details != nil {
		columns = append(columns, `details = ?`)
		values = append(values, comment.Details)
	}

	if len(columns) > 0 {
		columns = append(columns, `updated_at = ?`)
		values = append(values, null.NewTime(time.Now(), true))

		values = append(values, comment.CommentId)
		if _, err := r.getDb(tx).Exec(`UPDATE comments SET `+strings.Join(columns, ", ")+`WHERE comment_id = ?`, values...); err != nil {
			return err
		}
	}
	return nil
}
