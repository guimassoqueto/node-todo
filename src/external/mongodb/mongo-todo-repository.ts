import { CreateTodoRepository } from "@src/core/todo/services/create-todo-repository"
import { MongoHelper } from "./mongo-helper"


export class MongoTodoRepository implements CreateTodoRepository {
  async create(todo: CreateTodoRepository.Params): Promise<CreateTodoRepository.Result> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('todos')
    const result = await collection.insertOne(todo)
    const savedTodo = await collection.findOne({_id: result.insertedId})
    return mongodb.mapper<CreateTodoRepository.Result>(savedTodo)
  }
}