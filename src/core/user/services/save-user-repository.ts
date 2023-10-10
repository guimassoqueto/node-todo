import { User } from "../model/user"

export interface SaveUserRepository {
  save(user: SaveUserRepository.Params): Promise<SaveUserRepository.Result>
}

export namespace SaveUserRepository {
  export type Params = User
  export type Result = User
}