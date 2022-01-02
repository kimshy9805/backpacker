package model

func scanToken(token *Token) []interface{} {
	return []interface{}{
		&token.TokenId,
		&token.UserId,
		&token.Value,
		&token.Status,
		&token.CreatedAt,
		&token.ExpiredAt,
	}
}

func (r *repository) CreateToken(token *Token, tx *Tx) (int64, error) {
	result, err := r.getDb(tx).Exec(`INSERT INTO tokens (user_id, value, status, created_at, expired_at) 
											VALUES (?, ?, ?, ?, ?)`, token.UserId, token.Value, token.Status, token.CreatedAt, token.ExpiredAt)
	if err != nil {
		return -1, err
	}

	return result.LastInsertId()
}

func (r *repository) GetToken(value string, tx *Tx) (*Token, error) {
	token := &Token{}
	err := r.getDb(tx).QueryRow("SELECT * FROM tokens WHERE value = ?", value).Scan(scanToken(token)...)
	if err != nil {
		return nil, err
	}

	return token, nil
}
