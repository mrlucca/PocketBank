package postgres

import (
	"fmt"
	"os"

	"com.github/mrlucca/PocketBank/MsAuth/internal/domain"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type AccountRepositoryFromPostgres struct {
	db *gorm.DB
}

const postgresDsn = "host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=UTC"

var (
	host     = os.Getenv("POSTGRES_HOST")
	user     = os.Getenv("POSTGRES_USER")
	password = os.Getenv("POSTGRES_PASSWORD")
	dbName   = os.Getenv("POSTGRES_DB_NAME")
	port     = os.Getenv("POSTGRES_PORT")
)

func CreateAccountRepository() *AccountRepositoryFromPostgres {
	var (
		err error
		db  *gorm.DB
		dsn = fmt.Sprintf(
			postgresDsn,
			host,
			user,
			password,
			dbName,
			port,
		)
	)

	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	db.AutoMigrate(&domain.Account{})
	return &AccountRepositoryFromPostgres{
		db: db,
	}
}

func (r AccountRepositoryFromPostgres) GetByCpf(cpf string) (error, []domain.Account) {
	var accounts []domain.Account
	r.db.Find(&accounts, "cpf = ?", cpf)
	return nil, accounts
}

func (r AccountRepositoryFromPostgres) Save(a *domain.Account) {
	r.db.Create(&a)
}

func (r AccountRepositoryFromPostgres) GetByEmail(email string) (error, []domain.Account) {
	var accounts []domain.Account
	r.db.Find(&accounts, "email = ?", email)
	return nil, accounts
}
