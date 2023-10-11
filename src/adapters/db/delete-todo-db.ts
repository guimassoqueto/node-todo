import { DeleteTodo } from "./interfaces/db-todo";
import { DeleteTodoRepository } from "@src/core/todo/services/delete-todo-repository";

export class DeleteTodoDb implements DeleteTodo {
  constructor(
    private readonly deleteTodoRepository: DeleteTodoRepository
  ) {}

    async delete(userId: string, id: string): Promise<boolean> {
      const isDeleted = await this.deleteTodoRepository.delete(userId, id)
      return isDeleted
    }
}