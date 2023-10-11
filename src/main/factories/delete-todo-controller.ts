import { DeleteTodoController } from "@src/adapters/controllers/delete-todo-controller";
import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { DeleteTodoDb } from "@src/adapters/db/delete-todo-db";
import { MongoTodoRepository } from "@src/external/mongodb/mongo-todo-repository";

export function makeDeleteTodoController(): Controller {
  const todoRepository = new MongoTodoRepository()
  const deleteTodo = new DeleteTodoDb(todoRepository)
  return new DeleteTodoController(deleteTodo)
}