import { Todo } from "../model/todo"

export interface GetTodosRepository {
  getAll(userId: string): Promise<GetTodosRepository.Result>
}

export namespace GetTodosRepository {
  export type Param = Todo
  export type Result = Todo[]
}