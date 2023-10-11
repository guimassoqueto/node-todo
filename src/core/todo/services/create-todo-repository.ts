import { Todo } from "../model/todo"

export interface CreateTodoRepository {
  create(todo: CreateTodoRepository.Params): Promise<CreateTodoRepository.Result>
}

export namespace CreateTodoRepository {
  export type Params = Todo
  export type Result = Todo
}