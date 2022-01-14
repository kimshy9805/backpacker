package model

import (
	"crypto/sha256"
	"fmt"
	"strings"
)

func scanUser(user *User) []interface{} {
	return []interface{}{
		&user.UserId,
		&user.Email,
		&user.Password,
		&user.Name,
		&user.Status,
		&user.Details,
		&user.CreatedAt,
	}
}

func hashPassword(password string) string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(password)))
}

func (r *repository) CreateUser(user *User, tx *Tx) (int64, error) {
	result, err := r.getDb(tx).Exec(`INSERT INTO users (email, password, name, details, status, created_at) 
										  VALUES(?, ?, ?, ?, ?)`, user.Email, hashPassword(user.Password), user.Name, user.Details, user.Status, user.CreatedAt)
	if err != nil {
		return -1, err
	}

	return result.LastInsertId()
}

func (r *repository) GetUser(id int64, tx *Tx) (*User, error) {
	user := &User{}
	err := r.getDb(tx).QueryRow(`SELECT user_id, email, password, name, status, details, created_at 
								   FROM users WHERE user_id = ?`, id).Scan(scanUser(user)...)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (r *repository) GetUserByEmailAndPassword(email, password string, tx *Tx) (*User, error) {
	hash := hashPassword(password)
	user := &User{}
	err := r.getDb(tx).QueryRow(`SELECT user_id, email, password, name, status, details, created_at
								   FROM users WHERE email = ? AND password = ? AND status = ?`, email, hash, "ACTIVE").Scan(scanUser(user)...)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (r *repository) UpdateUser(user *User, tx *Tx) error {
	columns := make([]string, 0)
	values := make([]interface{}, 0)

	if !user.Name.IsZero() {
		columns = append(columns, `name = ?`)
		values = append(values, user.Name)
	}
	if user.Status != "" {
		columns = append(columns, `status = ?`)
		values = append(values, user.Status)
	}

	columns = append(columns, `details = ?`)
	// values = append(values, user.Details)
	if len(columns) > 0 {
		values = append(values, user.UserId)
		if _, err := r.getDb(tx).Exec(`UPDATE users SET `+strings.Join(columns, ", ")+` where user_id = ?`, values...); err != nil {
			return err
		}
	}
	return nil
}

func (r *repository) DeleteUser(id int64, tx *Tx) error {
	_, err := r.getDb(tx).Exec(`UPDATE users SET status = ? WHERE user_id = ?`, "DELETED", id)
	if err != nil {
		return err
	}
	return nil
}
