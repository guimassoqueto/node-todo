import { GetTodo } from "../db/interfaces/db-todo";
import { HTTPResponse, notFound, ok, serverError } from "../helpers/http-reponses";
import { Controller } from "./interfaces/controller";

export namespace GetTodoController {
  export type Request = {
    id: string
    userId: string
  }
}

export class GetTodoController implements Controller {
  constructor (private readonly getTodo: GetTodo) {}
  async handle(request: GetTodoController.Request): Promise<HTTPResponse> {
    try {
      const { userId, id } = request
      const todo = await this.getTodo.get(userId, id)
      if (!todo) return notFound()
      return ok(todo)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}