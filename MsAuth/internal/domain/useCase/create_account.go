package usecase

import (
	"com.github/mrlucca/PocketBank/MsAuth/internal/domain"
)

type CreateAccountInputDTO struct {
	Name     string `json:"name"`
	Email    string `json:"email"`
	Password string `json:"password"`
	Cpf      string `json:"cpf"`
	Number   string `json:"number"`
	Type     string `json:"type"`
}

type CreateAccountOutputDTO struct {
	Success      bool
	ErrorMessage error
	Account      *domain.Account
}

func CreateAccountUseCase(repository domain.AccountRepository, input CreateAccountInputDTO) CreateAccountOutputDTO {
	err, _ := repository.GetByCpf(input.Cpf)

	if err != nil {
		return CreateAccountOutputDTO{
			Success:      false,
			ErrorMessage: err,
		}
	}

	err, accountType := domain.TypeAccountFromRequest(input.Type)

	if err != nil {
		return CreateAccountOutputDTO{
			Success:      false,
			ErrorMessage: err,
		}
	}

	var account *domain.Account = domain.CreateAccount(
		input.Name,
		input.Number,
		input.Password,
		input.Cpf,
		input.Number,
		accountType,
	)

	repository.Save(account)

	return CreateAccountOutputDTO{
		Success: true,
		Account: account,
	}
}
