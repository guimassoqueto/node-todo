import { Controller } from "@src/adapters/interfaces/controller";
import { RegisterUserController } from "@src/adapters/user-register-controller";
import { faker } from "@faker-js/faker";
import { Validator } from "@src/adapters/controllers/helpers/validator";
import UserRepository from "@src/core/user/services/user-repository";

function mockRequest(): RegisterUserController.Request {
  const password = faker.internet.password();
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirm: password,
  };
}

type SutType = {
  registerUserController: RegisterUserController;
  validatorSpy: Validator;
  userRepositorySpy: UserRepository;
};

function makeSut(): SutType {
  const registerUserContoller = new RegisterUserController();
}

describe("User Register Controller", () => {
  test("", () => {
  });
});
