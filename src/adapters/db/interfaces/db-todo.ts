import { Todo } from "@src/core/todo/model/todo";

export interface CreateTodo {
  create(todo: Todo): Promise<Todo>
}