package model

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/go-sql-driver/mysql"

	"kay.backpacker/config"
)

const dateTimeFormat = "2022-01-01 12:00:00"

type repository struct {
	db *sql.DB
}

type Repository interface {
	// Transcation
	Begin() (*Tx, error)
	Commit(tx *Tx) error
	Rollback(tx *Tx) error

	// Tokens
	CreateToken(token *Token, tx *Tx) (int64, error)
	GetToken(value string, tx *Tx) (*Token, error)
	// UpdateToken(token *Token, tx *Tx) (int64, error)

	// Users
	CreateUser(user *User, tx *Tx) (int64, error)
	GetUser(id int64, tx *Tx) (*User, error)
	UpdateUser(user *User, tx *Tx) error

	// Tweets
	CreateTweet(tweet *Tweet, tx *Tx) (int64, error)
	GetTweets(tx *Tx) ([]*Tweet, error)
	GetTweet(id int64, tx *Tx) (*Tweet, error)
	GetTweetsByUserId(id int64, tx *Tx) ([]*Tweet, error)
	GetMyTweets(userId int64, tx *Tx) ([]*Tweet, error)
	UpdateTweet(tweet *Tweet, tx *Tx) error
	LikeTweet(tweetId int64, userId int64, tx *Tx) error
	UnlikeTweet(tweetId int64, userId int64, tx *Tx) error

	// Comments
	CreateComment(comment *Comment, tx *Tx) (int64, error)
	// GetComment(id int64, tx *Tx) (*Tweet, error)
	GetCommentsByTweetId(tweetId int64, tx *Tx) ([]*Comment, error)
	// GetMyComments(userId int64, tx *Tx) ([]*Tweet, error)
	// UpdateComment(tweet *Tweet, tx *Tx) error
}

type QueryAble interface {
	Exec(query string, args ...interface{}) (sql.Result, error)
	Query(query string, args ...interface{}) (*sql.Rows, error)
	QueryRow(query string, args ...interface{}) *sql.Row
}

type Tx struct {
	*sql.Tx
}

func (r *repository) getDb(tx *Tx) QueryAble {
	if tx != nil {
		return tx.Tx
	}
	return r.db
}

func (r *repository) Begin() (*Tx, error) {
	tx, err := r.db.Begin()
	return &Tx{tx}, err
}

func (r *repository) Commit(tx *Tx) error {
	return tx.Commit()
}

func (r *repository) Rollback(tx *Tx) error {
	return tx.Rollback()
}

func InitDB(mysqlConfig *config.MysqlConfig) Repository {
	driverConfig := &mysql.Config{
		User:      mysqlConfig.Username,
		Passwd:    mysqlConfig.Password,
		DBName:    mysqlConfig.Database,
		Loc:       location,
		ParseTime: true,
	}

	if mysqlConfig.Host != "" {
		driverConfig.Net = "tcp"
		if mysqlConfig.Port != 0 {
			driverConfig.Addr = fmt.Sprintf("%s:%d", mysqlConfig.Host, mysqlConfig.Port)
		}
	}

	fmt.Println(driverConfig.FormatDSN())

	// Get a database handle.
	db, err := sql.Open("mysql", driverConfig.FormatDSN())
	if err != nil {
		log.Fatal(err)
	}

	// Test ping
	pingErr := db.Ping()
	if pingErr != nil {
		log.Fatal(pingErr)
	}
	fmt.Println("Connected!")

	// repository struct will implement Repository interface
	return &repository{
		db: db,
	}
}
