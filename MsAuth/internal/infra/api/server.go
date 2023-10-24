package api

import (
	"fmt"
	"os"

	"com.github/mrlucca/PocketBank/MsAuth/internal/domain"
	usecase "com.github/mrlucca/PocketBank/MsAuth/internal/domain/useCase"
	"com.github/mrlucca/PocketBank/MsAuth/internal/infra/postgres"
	"github.com/gofiber/fiber/v2"
)

func Server() {
	var serverPort string = os.Getenv("SERVER_PORT")

	var accountRepository domain.AccountRepository = postgres.CreateAccountRepository()
	app := fiber.New()

	app.Post("/create", createUserHandler(accountRepository))

	app.Listen(":" + serverPort)
}

func createUserHandler(repository domain.AccountRepository) func(c *fiber.Ctx) error {

	return func(c *fiber.Ctx) error {
		fmt.Printf("accept request with this data %s\n", string(c.Body()))
		var input usecase.CreateAccountInputDTO

		if err := c.BodyParser(&input); err != nil {
			return err
		}

		var output usecase.CreateAccountOutputDTO = usecase.CreateAccountUseCase(repository, input)

		if output.Success {
			return c.JSON(fiber.Map{
				"success":   output.Success,
				"accountID": output.Account.CompositeID,
				"createdAt": output.Account.CreatedAt,
			})
		}

		return output.ErrorMessage
	}
}
