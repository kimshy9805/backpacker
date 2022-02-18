package model

import (
	"crypto/sha256"
	"database/sql"
	"fmt"
	"strings"
	"time"

	"gopkg.in/guregu/null.v4"
	"kay.backpacker/config"
)

func scanUser(user *User) []interface{} {
	return []interface{}{
		&user.UserId,
		&user.Email,
		&user.Password,
		&user.Alias,
		&user.Status,
		&user.ProfileImage,
		&user.Description,
		&user.Details,
		&user.CreatedAt,
		&user.UpdatedAt,
	}
}

func scanUserAPI(user *User) []interface{} {
	return []interface{}{}
}

func (r *repository) readUsers(rows *sql.Rows, tx *Tx, ty string) ([]*User, error) {
	users := make([]*User, 0)

	for rows.Next() {
		user := &User{}
		switch ty {
		case config.USER_DEFAULT:
			if err := rows.Scan(scanUser(user)...); err != nil {
				return nil, err
			}
			break
		case config.USER_API:
			if err := rows.Scan(scanUserAPI(user)...); err != nil {
				return nil, err
			}
			break
		default:
			return nil, sql.ErrNoRows
		}
		users = append(users, user)
	}

	return users, nil
}

func hashPassword(password string) string {
	return fmt.Sprintf("%x", sha256.Sum256([]byte(password)))
}

func (r *repository) CreateUser(user *User, tx *Tx) (int64, error) {
	result, err := r.getDb(tx).Exec(`INSERT INTO users (email, password, alias, status, created_at, updated_at) 
										  VALUES(?, ?, ?, ?, ?, ?)`, user.Email, hashPassword(user.Password), user.Alias, user.Status, user.CreatedAt, user.UpdatedAt)
	if err != nil {
		return -1, err
	}

	return result.LastInsertId()
}

func (r *repository) GetUser(id int64, tx *Tx) (*User, error) {
	user := &User{}
	err := r.getDb(tx).QueryRow(`SELECT user_id, email, password, alias, status, profile_image, description, details, created_at, updated_at
								   FROM users WHERE user_id = ?`, id).Scan(scanUser(user)...)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return user, nil
}

func (r *repository) GetUserByEmailAndPassword(email, password string, tx *Tx) (*User, error) {
	hash := hashPassword(password)
	user := &User{}
	err := r.getDb(tx).QueryRow(`SELECT user_id, email, password, alias, status, profile_image, description, details, created_at, updated_at
								   FROM users WHERE email = ? AND password = ? AND status = ?`, email, hash, "ACTIVE").Scan(scanUser(user)...)
	if err != nil {
		return nil, err
	}
	return user, nil
}

func (r *repository) UpdateUser(user *User, tx *Tx) error {
	columns := make([]string, 0)
	values := make([]interface{}, 0)

	if user.Password != "" {
		columns = append(columns, `password = ?`)
		values = append(values, hashPassword(user.Password))
	}

	if user.Alias.Valid {
		columns = append(columns, `alias = ?`)
		values = append(values, user.Alias)
	}
	if user.Status != "" {
		columns = append(columns, `status = ?`)
		values = append(values, user.Status)
	}

	if user.ProfileImage.Valid {
		columns = append(columns, `profile_image = ?`)
		values = append(values, user.ProfileImage)
	}

	if user.Description.Valid {
		columns = append(columns, `description = ?`)
		values = append(values, user.Description)
	}

	if user.Details != nil {
		columns = append(columns, `details = ?`)
		values = append(values, user.Details)
	}

	if len(columns) > 0 {
		// Update time
		columns = append(columns, `updated_at = ?`)
		values = append(values, null.NewTime(time.Now(), true))

		values = append(values, user.UserId)
		fmt.Println(columns, values)
		if _, err := r.getDb(tx).Exec(`UPDATE users SET `+strings.Join(columns, ", ")+` WHERE user_id = ?`, values...); err != nil {
			return err
		}
	}
	return nil
}

func (r *repository) DeleteUser(id int64, tx *Tx) error {
	result, err := r.getDb(tx).Exec(`UPDATE users SET status = ? WHERE user_id = ?`, "DELETED", id)
	if err != nil {
		return err
	}
	if _, err := result.RowsAffected(); err != nil {
		return err
	}
	return nil
}
