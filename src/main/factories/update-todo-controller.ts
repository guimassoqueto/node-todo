import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { UpdateTodoController } from "@src/adapters/controllers/update-todo-controller";
import { RequiredFieldValidator, Validator, ValidatorComposite } from "@src/adapters/controllers/validation";
import { UpdateTodoDb } from "@src/adapters/db/update-todo-db";
import { MongoTodoRepository } from "@src/external/mongodb/mongo-todo-repository";


export function makeUpdateTodoController(): Controller {
  const validator = makeUpdateTodoValidator()
  const todoRepository = new MongoTodoRepository()
  const updateTodo = new UpdateTodoDb(todoRepository)
  return new UpdateTodoController(validator, updateTodo)
}

function makeUpdateTodoValidator(): ValidatorComposite {
  const validators: Validator[] = [];
  for (
    const requiredField of ["task", "done"]
  ) {
    validators.push(new RequiredFieldValidator(requiredField));
  }
  return new ValidatorComposite(validators);
}