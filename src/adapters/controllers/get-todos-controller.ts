import { GetTodos } from "../db/interfaces/db-todo";
import { HTTPResponse, ok, serverError } from "../helpers/http-reponses";
import { Controller } from "./interfaces/controller";

export namespace GetTodosController {
  export type Request = {
    userId: string
  }
}

export class GetTodosController implements Controller {
  constructor(
    private readonly getTodos: GetTodos
  ) {}

  async handle(request: GetTodosController.Request): Promise<HTTPResponse> {
    try {
      const { userId } = request
      const todos = await this.getTodos.getAll(userId)
      return ok(todos)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}