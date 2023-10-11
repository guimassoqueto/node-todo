import { CreateTodoRepository } from "@src/core/todo/services/create-todo-repository"
import { GetTodosRepository } from "@src/core/todo/services/get-todos-repository"
import { MongoHelper } from "./mongo-helper"
import { GetTodoRepository } from "@src/core/todo/services/get-todo-repository"
import { ObjectId } from "mongodb"
import { DeleteTodoRepository } from "@src/core/todo/services/delete-todo-repository"


export class MongoTodoRepository implements CreateTodoRepository, 
  GetTodosRepository, 
  GetTodoRepository,
  DeleteTodoRepository {
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

  async get(userId: string, id: string): Promise<GetTodoRepository.Result> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('todos')
    const todo = await collection.findOne({ _id: new ObjectId(id), userId: userId })
    if (!todo) return null
    return mongodb.mapper<GetTodoRepository.Result>(todo)
  }

  async delete(userId: string, id: string): Promise<boolean> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('todos')
    const result = await collection.deleteOne({ _id: new ObjectId(id), userId: userId })
    if (result.deletedCount) return true
    return false
  }
}