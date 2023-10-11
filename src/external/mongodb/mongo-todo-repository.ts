import { CreateTodoRepository } from "@src/core/todo/services/create-todo-repository"
import { GetTodosRepository } from "@src/core/todo/services/get-todos-repository"
import { MongoHelper } from "./mongo-helper"
import { Todo } from "@src/core/todo/model/todo"


export class MongoTodoRepository implements CreateTodoRepository, GetTodosRepository {
  async create(todo: CreateTodoRepository.Params): Promise<CreateTodoRepository.Result> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('todos')
    const result = await collection.insertOne(todo)
    const savedTodo = await collection.findOne({_id: result.insertedId})
    return mongodb.mapper<CreateTodoRepository.Result>(savedTodo)
  }

  async getAll(userId: string): Promise<GetTodosRepository.Result> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('todos')
    const todos = (await collection.find({ userId: userId }).toArray() as unknown) as GetTodosRepository.Result
    return mongodb.arrayMapper<GetTodosRepository.Param>(todos)
  }
}