package usecase

import (
	"errors"

	"com.github/mrlucca/PocketBank/MsAuth/internal/domain"
)

type ValidUserInputDTO struct {
	Email    string
	Password string
	Type     string
}

type ValidUserOutputDTO struct {
	Success      bool
	ErrorMessage error
}

func ValidUserFromEmailAndPassword(repository domain.AccountRepository, input ValidUserInputDTO) ValidUserOutputDTO {
	err, accountType := domain.TypeAccountFromRequest(input.Type)

	if err != nil {
		return ValidUserOutputDTO{
			Success:      false,
			ErrorMessage: err,
		}
	}

	err, accounts := repository.GetByEmail(input.Email)

	if err != nil {
		return ValidUserOutputDTO{
			Success:      false,
			ErrorMessage: err,
		}
	}

	for _, account := range accounts {
		if account.Type != accountType {
			continue
		}

		var isValidAccount = account.Password == input.Password

		if isValidAccount {
			return ValidUserOutputDTO{
				Success: true,
			}
		}
	}

	return ValidUserOutputDTO{
		Success:      false,
		ErrorMessage: errors.New("invalid password"),
	}
}
