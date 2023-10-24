package domain

import (
	"fmt"
	"strings"

	"gorm.io/gorm"
)

type AccountType string

const (
	PJ AccountType = "J"
	PF AccountType = "F"
)

type Account struct {
	gorm.Model
	ID uint `gorm:"primaryKey:false"`

	CompositeID string `gorm:"primary_key"`
	Name        string
	Email       string
	Password    string
	Cpf         string
	Number      string
	Type        AccountType `gorm:"type:char(1);check:type IN ('J', 'F')"`
}

type AccountRepository interface {
	GetByCpf(cpf string) (error, []Account)
	GetByEmail(email string) (error, []Account)
	Save(account *Account)
}

func CreateAccount(name, email, password, cpf, number string, t AccountType) *Account {
	return &Account{
		Name:        name,
		Email:       email,
		Password:    password,
		Cpf:         cpf,
		Number:      number,
		Type:        t,
		CompositeID: cpf + string(t),
	}
}

func TypeAccountFromRequest(t string) (error, AccountType) {
	t = strings.Trim(strings.ToUpper(t), " ")
	switch t {
	case "F":
		return nil, PF
	case "J":
		return nil, PJ
	default:
		// TODO: change %v to another type to accept value string
		return fmt.Errorf("invalid account type: %v", t), AccountType(' ')
	}
}
