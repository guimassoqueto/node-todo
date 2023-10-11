import {
  RequiredFieldValidator,
  Validator,
  ValidatorComposite,
} from "@src/adapters/controllers/validation";
import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { LoginController } from "@src/adapters/controllers/login-controller";
import { AuthenticateUserDb } from "@src/adapters/db/authenticate-user-db";
import { BcyptAdapter } from "@src/external/bcrypt/bcrypt-adapter";
import { JwtAdapter } from "@src/external/jsonwebtoken/jwt-adapter";
import { MongoUserRepository } from "@src/external/mongodb/mongo-user-repository";
import { JWT_SECRET, SALT_ROUNDS } from "@src/settings";

export function makeLoginController(): Controller {
  const validator = makeValidator();
  const repository = new MongoUserRepository();
  const hashComparer = new BcyptAdapter(SALT_ROUNDS);
  const encrypter = new JwtAdapter(JWT_SECRET);
  const authenticateUser = new AuthenticateUserDb(
    repository,
    hashComparer,
    encrypter,
  );
  return new LoginController(validator, authenticateUser);
}

function makeValidator() {
  const validators: Validator[] = [];

  for (const requiredField of ["email", "password"]) {
    validators.push(new RequiredFieldValidator(requiredField));
  }
  return new ValidatorComposite(validators);
}
