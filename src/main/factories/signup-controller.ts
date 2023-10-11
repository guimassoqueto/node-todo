import { FieldComparisonValidator } from "@src/adapters/controllers/validation/field-comparison-validator";
import { RequiredFieldValidator } from "@src/adapters/controllers/validation/required-field-validator";
import { Validator } from "@src/adapters/controllers/validation/validator";
import { ValidatorComposite } from "@src/adapters/controllers/validation/validator-composite";
import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { SignUpController } from "@src/adapters/controllers/signup-controller";
import { LoadUserByEmailDb } from "@src/adapters/db/load-user-by-email-db";
import { SaveUserDb } from "@src/adapters/db/save-user-db";
import { BcyptAdapter } from "@src/external/bcrypt/bcrypt-adapter";
import { MongoUserRepository } from "@src/external/mongodb/mongo-user-repository";
import { SALT_ROUNDS } from "@src/settings";

export function makeSignUpControllerFactory(): Controller {
  const validator = makeSignupValidations();
  const userRepository = new MongoUserRepository();
  const loadUserByEmail = new LoadUserByEmailDb(userRepository);
  const passwordHasher = new BcyptAdapter(SALT_ROUNDS);
  const saveUserDb = new SaveUserDb(userRepository, passwordHasher);
  return new SignUpController(
    validator,
    loadUserByEmail,
    saveUserDb,
  );
}

function makeSignupValidations(): ValidatorComposite {
  const validators: Validator[] = [];
  for (
    const requiredField of ["name", "email", "password", "passwordConfirm"]
  ) {
    validators.push(new RequiredFieldValidator(requiredField));
  }
  validators.push(new FieldComparisonValidator("password", "passwordConfirm"));
  return new ValidatorComposite(validators);
}
