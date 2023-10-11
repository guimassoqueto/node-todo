import { Todo } from "@src/core/todo/model/todo";

export interface CreateTodo {
  create(todo: Todo): Promise<Todo>
}

export interface GetTodos {
  getAll(userId: string): Promise<Todo[]>
}

export interface GetTodo {
  get(userId: string, id: string): Promise<Todo | null>
}

export interface DeleteTodo {
  delete(userId: string, id: string): Promise<boolean>
}