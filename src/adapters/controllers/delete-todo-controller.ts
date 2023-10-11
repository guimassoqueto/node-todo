import { DeleteTodo } from "../db/interfaces/db-todo";
import { HTTPResponse, noContent, notFound, serverError } from "../helpers/http-reponses";
import { Controller } from "./interfaces/controller";

export namespace DeleteTodoController {
  export type Request ={
    userId: string,
    id: string
  }
}

export class DeleteTodoController implements Controller {
  constructor(private readonly deleteTodo: DeleteTodo) {}
  async handle(request: DeleteTodoController.Request): Promise<HTTPResponse> {
    try {
      const { id, userId } = request
      const todoDeleted = await this.deleteTodo.delete(userId, id)
      if (!todoDeleted) return notFound()
      return noContent()
    } catch(error) {
      console.error(error)
      return serverError()
    }
  }
}