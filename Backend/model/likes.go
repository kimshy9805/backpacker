package model

func (r *repository) LikeTweet(userId int64, tweetId int64, tx *Tx) error {
	result, err := r.getDb(tx).Exec(`INSERT INTO likes (user_id, place_id ,tweet_id) VALUES (?, ?, ?)`, userId, nil, tweetId)
	if err != nil {
		return err
	}
	if _, err := result.RowsAffected(); err != nil {
		return err
	}
	return nil
}

func (r *repository) UnlikeTweet(userId int64, tweetId int64, tx *Tx) error {
	result, err := r.getDb(tx).Exec(`DELETE FROM likes WHERE user_id = ? AND tweet_id = ?`, userId, tweetId)
	if err != nil {
		return err
	}
	if _, err := result.RowsAffected(); err != nil {
		return err
	}
	return nil
}
