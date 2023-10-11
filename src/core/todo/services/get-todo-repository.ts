import { Todo } from "../model/todo"

export interface GetTodoRepository {
  get(userId: string, id: string): Promise<GetTodoRepository.Result>
}


export namespace GetTodoRepository {
  export type Result = Todo | null
}