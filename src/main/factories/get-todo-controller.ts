import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { GetTodoController } from "@src/adapters/controllers/get-todo-controller";
import { GetTodoDb } from "@src/adapters/db/get-todo-db";
import { MongoTodoRepository } from "@src/external/mongodb/mongo-todo-repository";


export function makeGetTodoController(): Controller {
  const getTodosRepository = new MongoTodoRepository()
  const getTodo = new GetTodoDb(getTodosRepository)
  return new GetTodoController(getTodo)
}