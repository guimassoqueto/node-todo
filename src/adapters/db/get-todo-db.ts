import { Todo } from "@src/core/todo/model/todo";
import { GetTodo } from "./interfaces/db-todo";
import { GetTodoRepository } from "@src/core/todo/services/get-todo-repository";

export class GetTodoDb implements GetTodo {
  constructor(
    private readonly getTodoRepository: GetTodoRepository
  ) {}

    async get(userId: string, id: string): Promise<GetTodoRepository.Result> {
      const todo = await this.getTodoRepository.get(userId, id)
      return todo
    }
}