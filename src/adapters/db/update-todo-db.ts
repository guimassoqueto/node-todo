import { Todo } from "@src/core/todo/model/todo";
import { UpdateTodo } from "./interfaces/db-todo";
import { UpdateTodoRepository } from "@src/core/todo/services/update-todo-repository";

export class UpdateTodoDb implements UpdateTodo {
  constructor(
    private readonly updateTodoRepository: UpdateTodoRepository,
  ){}
  async update(todo: Todo): Promise<UpdateTodoRepository.Result> {
    const updatedTodo = await this.updateTodoRepository.update(todo)
    return updatedTodo
  }
}