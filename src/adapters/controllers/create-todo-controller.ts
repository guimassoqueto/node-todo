import { CreateTodo } from "../db/interfaces/db-todo";
import { BadRequest, HTTPResponse, created, serverError } from "../helpers/http-reponses";
import { Controller } from "./interfaces/controller";
import { Validator } from "./validation";

export namespace CreateTodoController {
  export type Request = {
    userId: string,
    task: string,
    done: boolean
  }
}

export class CreateTodoController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly createTodo: CreateTodo
  ) {}

  async handle(request: CreateTodoController.Request): Promise<HTTPResponse> {
    try {
      const error = this.validator.validate(request)
      if (error) return BadRequest(error)

      const { userId, task, done } = request;
      
      const currentDate = new Date();
      const todo = await this.createTodo.create({
        userId,
        task, 
        done,
        updatedAt: currentDate
      })
      
      return created(todo)
    } catch (error) {
      console.error(error)
      return Promise.resolve(serverError())
    }

  }
}