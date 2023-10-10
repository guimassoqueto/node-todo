import { Controller } from "@src/adapters/interfaces/controller";
import { SignUpController } from "@src/adapters/user-register-controller";
import { faker } from "@faker-js/faker";
import { Validator } from "@src/adapters/controllers/helpers/validator";
import UserRepository from "@src/core/user/services/user-repository";

function mockRequest(): SignUpController.Request {
  const password = faker.internet.password();
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: password,
    passwordConfirm: password,
  };
}

type SutType = {
  signUpController: SignUpController;
  validatorSpy: Validator;
  userRepositorySpy: UserRepository;
};

function makeSut(): SutType {
  const signUpContoller = new SignUpController();
}

describe("User Register Controller", () => {
  test("", () => {
  });
});
