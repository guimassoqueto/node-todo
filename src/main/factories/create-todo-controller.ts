import { CreateTodoController } from "@src/adapters/controllers/create-todo-controller";
import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { RequiredFieldValidator, Validator } from "@src/adapters/controllers/validation";
import { ValidatorComposite } from "@src/adapters/controllers/validation/validator-composite";
import { CreateTodoDb } from "@src/adapters/db/create-todo-db";
import { MongoTodoRepository } from "@src/external/mongodb/mongo-todo-repository";


export function makeCreateTodoController(): Controller {
  const validator = makeCreateTodoValidator()
  const todoRepository = new MongoTodoRepository()
  const createTodoDb = new CreateTodoDb(todoRepository)
  return new CreateTodoController(validator, createTodoDb)
}

function makeCreateTodoValidator(): ValidatorComposite {
  const validators: Validator[] = [];
  for ( const requiredField of ["task", "done"] ) {
    validators.push(new RequiredFieldValidator(requiredField));
  }
  return new ValidatorComposite(validators);
}