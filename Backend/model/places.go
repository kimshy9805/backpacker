package model

func (r *repository) GetPlace(id int64, tx *Tx) (*Place, error) {
	tweet := &Tweet{}
	err := r.getDb(tx).QueryRow(`SELECT * 
								   FROM tweets 
								  WHERE tweet_id = ?`, id).Scan(scanTweet(tweet)...)
	if err != nil {
		return nil, err
	}
	tweet.User, _ = r.GetUser(tweet.UserId, tx)
	return nil, nil
}

func (r *repository) GetMyPlaces(id int64, tx *Tx) ([]*Place, error) {
	tweet := &Tweet{}
	err := r.getDb(tx).QueryRow(`SELECT * 
								   FROM tweets 
								  WHERE tweet_id = ?`, id).Scan(scanTweet(tweet)...)
	if err != nil {
		return nil, err
	}
	return nil, nil
}
