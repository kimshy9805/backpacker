package model

import (
	"kay.backpacker/config"
)

func (r *repository) GetMyFollowers(userId int64, tx *Tx) ([]*User, error) {
	rows, err := r.getDb(tx).Query(`SELECT u.*
									  FROM following f
									  JOIN users u
									    ON f.followed_user_id = u.user_id
									 WHERE f.following_user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	return r.readUsers(rows, tx, config.USER_DEFAULT)
}

func (r *repository) GetMyFollowings(userId int64, tx *Tx) ([]*User, error) {
	rows, err := r.getDb(tx).Query(`SELECT u.*
									  FROM following f
									  JOIN users u
									    ON f.following_user_id = u.user_id
									 WHERE f.followed_user_id = ?`, userId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	return r.readUsers(rows, tx, config.USER_DEFAULT)
}

func (r *repository) FollowUser(followingUserId int64, userId int64, tx *Tx) error {
	result, err := r.getDb(tx).Exec(`INSERT 
									   INTO following (following_user_id, followed_user_id)
								     VALUES (?, ?)`, followingUserId, userId)
	if err != nil {
		return err
	}
	if _, err := result.RowsAffected(); err != nil {
		return err
	}
	return nil
}

func (r *repository) UnFollowUser(followingUserId int64, userId int64, tx *Tx) error {
	result, err := r.getDb(tx).Exec(`DELETE 
									   FROM following 
									  WHERE following_user_id = ? 
										AND followed_user_id = ?`, followingUserId, userId)
	if err != nil {
		return err
	}
	if _, err := result.RowsAffected(); err != nil {
		return err
	}
	return nil
}
