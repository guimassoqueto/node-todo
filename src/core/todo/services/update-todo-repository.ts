import { Todo } from "../model/todo"

export interface UpdateTodoRepository {
  update(todo: UpdateTodoRepository.Params): Promise<UpdateTodoRepository.Result>
}

export namespace UpdateTodoRepository {
  export type Params = Todo
  export type Result = Todo | null
}