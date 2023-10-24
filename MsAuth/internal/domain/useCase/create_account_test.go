package usecase_test

import (
	"errors"
	"testing"

	"com.github/mrlucca/PocketBank/MsAuth/internal/domain"
	usecase "com.github/mrlucca/PocketBank/MsAuth/internal/domain/useCase"
)

type mockAccountRepository struct {
	v bool
}

func (m mockAccountRepository) GetByCpf(cpf string) (error, []domain.Account) {
	if m.v {
		return errors.New("user already exists"), []domain.Account{}
	}
	return nil, []domain.Account{}
}

func (m mockAccountRepository) GetByEmail(email string) (error, []domain.Account) {
	return nil, []domain.Account{}
}


func (m mockAccountRepository) Save(a *domain.Account) {
	
}


func TestCreateAccountWhenUserExist(t *testing.T) {
	response := usecase.CreateAccountUseCase(
		mockAccountRepository{v: true}, 
		usecase.CreateAccountInputDTO{},
	)
	
	if response.Success {
		t.Error("success needs to be false")
	}

	t.Logf(response.ErrorMessage.Error())
}

func TestCreateAccountWithInvalidTypeAccount(t *testing.T) {
	response := usecase.CreateAccountUseCase(
		mockAccountRepository{}, 
		usecase.CreateAccountInputDTO{
			Type: "X",
		},
	)
	if response.Success {
		t.Error("this account type is invalid")
	}
}

func TestCreateAccountWithValidData(t *testing.T) {
	const (
		expectedUserNameResponse = "lucca vinicios"
		expectedCpfResponse = "0000000"
	)
	response := usecase.CreateAccountUseCase(
		mockAccountRepository{}, 
		usecase.CreateAccountInputDTO{
			Type: "F", 
			Name: expectedUserNameResponse,
			Cpf: expectedCpfResponse,
			Number: "123",
			Password: "123",
			Email: "test@mail.com",
		},
	)
	if response.Success {
		if response.Account.Name != expectedUserNameResponse {
			t.Error("user is not equals than expected")
		}

		if response.Account.Cpf != expectedCpfResponse {
			t.Error("cpf is not equals than expected")
		}
	}
}

