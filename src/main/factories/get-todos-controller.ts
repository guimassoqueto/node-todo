import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { GetTodosController } from "@src/adapters/controllers/get-todos-controller";
import { GetTodosDb } from "@src/adapters/db/get-todos-db";
import { MongoTodoRepository } from "@src/external/mongodb/mongo-todo-repository";


export function makeGetTodosController(): Controller {
  const getTodosRepository = new MongoTodoRepository()
  const getTodos = new GetTodosDb(getTodosRepository)
  return new GetTodosController(getTodos)
}