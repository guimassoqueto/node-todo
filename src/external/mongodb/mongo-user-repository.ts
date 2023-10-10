import { MongoHelper } from "./mongo-helper"
import { SaveUserRepository } from "@src/core/user/services/save-user-repository"

export class MongoSaveUserRepository implements SaveUserRepository {
  async save(user: SaveUserRepository.Params): Promise<SaveUserRepository.Result> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('users')
    const result = await collection.insertOne(user)
    const savedUser = await collection.findOne({_id: result.insertedId})
    return mongodb.mapper<SaveUserRepository.Result>(savedUser)
  }
}