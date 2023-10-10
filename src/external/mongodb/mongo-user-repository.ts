import { LoadUserRepository } from "@src/core/user/services/load-user-repository"
import { SaveUserRepository } from "@src/core/user/services/save-user-repository"
import { UpdateAccessTokenRepository } from "@src/core/user/services/update-access-token-repository"
import { MongoHelper } from "./mongo-helper"
import { ObjectId } from "mongodb"


export class MongoUserRepository implements SaveUserRepository, LoadUserRepository, UpdateAccessTokenRepository {
  async save(user: SaveUserRepository.Params): Promise<SaveUserRepository.Result> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('users')
    const result = await collection.insertOne(user)
    const savedUser = await collection.findOne({_id: result.insertedId})
    return mongodb.mapper<SaveUserRepository.Result>(savedUser)
  }

  async loadByEmail(email: string): Promise<LoadUserRepository.Result | null> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('users')
    const user = await collection.findOne({ email })
    if (!user) return null
    return mongodb.mapper<SaveUserRepository.Result>(user)
  }

  async updateAccessToken(userId: string, accessToken: string): Promise<void> {
    const mongodb = MongoHelper.getInstance()
    const collection = await mongodb.getCollection('users')
    await collection.updateOne({_id: new ObjectId(userId) }, { $set: { accessToken } })
  }
}