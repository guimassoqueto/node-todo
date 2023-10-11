import { UpdateTodo } from "../db/interfaces/db-todo";
import { BadRequest, HTTPResponse, notFound, ok, serverError } from "../helpers/http-reponses";
import { Controller } from "./interfaces/controller";
import { Validator } from "./validation";


export namespace UpdateTodoController {
  export type Params = {
    id: string
    userId: string,
    task: string,
    done: boolean
  }
}

export class UpdateTodoController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly updateTodo: UpdateTodo
  ){}
  async handle(request: UpdateTodoController.Params): Promise<HTTPResponse> {
    try {
      const error = this.validator.validate(request)
      if (error) return BadRequest(error)
      const { id, userId, task, done } = request
    
      const currentDate = new Date()
      const updatedTodo = await this.updateTodo.update({
        id,
        userId,
        task,
        done,
        updatedAt: currentDate
      })
      if (!updatedTodo) return notFound()
      return ok(updatedTodo)
    } catch (error) {
      console.error(error)
      return serverError()
    }
  }
}