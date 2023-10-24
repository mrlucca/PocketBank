package usecase_test

import (
	"errors"
	"testing"

	"com.github/mrlucca/PocketBank/MsAuth/internal/domain"
	usecase "com.github/mrlucca/PocketBank/MsAuth/internal/domain/useCase"
)

type mockAccountRepositoryForValidUser struct {
	v bool
}

func (m mockAccountRepositoryForValidUser) GetByCpf(cpf string) (error, []domain.Account) {
	return nil, []domain.Account{}
}

func (m mockAccountRepositoryForValidUser) GetByEmail(email string) (error, []domain.Account) {
	if m.v {
		return errors.New("undefined account"), []domain.Account{}
	}
	return nil, []domain.Account{
		{
			Password: "test_pass",
			Type:     "F",
		},
	}
}

func (m mockAccountRepositoryForValidUser) Save(a *domain.Account) {

}

func TestValidUserWithInvalidAccountType(t *testing.T) {
	response := usecase.ValidUserFromEmailAndPassword(
		mockAccountRepositoryForValidUser{v: true},
		usecase.ValidUserInputDTO{
			Type: "X",
		},
	)

	if response.Success {
		t.Error("invalid account type but the execution returns success")
	}

}

func TestValidUserWithoutAccount(t *testing.T) {
	response := usecase.ValidUserFromEmailAndPassword(
		mockAccountRepositoryForValidUser{v: true},
		usecase.ValidUserInputDTO{
			Type: "F",
		},
	)

	if response.Success {
		t.Error("account does not exists, but this test finished with success")
	}

}

func TestValidUserWithInvalidPassword(t *testing.T) {
	response := usecase.ValidUserFromEmailAndPassword(
		mockAccountRepositoryForValidUser{v: false},
		usecase.ValidUserInputDTO{
			Type:     "F",
			Password: "tes_pass",
		},
	)

	if response.Success {
		t.Errorf("invalid password but the execution finished with success")
	}

}

func TestValidUserWithValidPassword(t *testing.T) {
	response := usecase.ValidUserFromEmailAndPassword(
		mockAccountRepositoryForValidUser{v: false},
		usecase.ValidUserInputDTO{
			Type:     "F",
			Password: "test_pass",
		},
	)

	if !response.Success {
		t.Errorf("valid password but the execution finished with error")
	}

}
