import { GetTodos } from "./interfaces/db-todo";
import { GetTodosRepository } from "@src/core/todo/services/get-todos-repository";

export class GetTodosDb implements GetTodos {
  constructor(
    private readonly getTodosRepository: GetTodosRepository
  ) {}

  async getAll(userId: string): Promise<GetTodosRepository.Result> {
    const todos = await this.getTodosRepository.getAll(userId)
    return todos
  }
}