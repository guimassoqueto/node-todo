import { CreateTodoRepository } from "@src/core/todo/services/create-todo-repository";
import { CreateTodo } from "./interfaces/db-todo";
import { Todo } from "@src/core/todo/model/todo";


export class CreateTodoDb implements CreateTodo {
  constructor(
    private readonly createTodoRepository: CreateTodoRepository
  ) {}
  async create(todo: Todo): Promise<Todo> {
    const createdTodo = await this.createTodoRepository.create(todo)
    return createdTodo
  }
}
