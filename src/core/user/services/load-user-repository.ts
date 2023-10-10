import { User } from "../model/user"

export interface LoadUserRepository {
  byEmail(email: string): Promise<LoadUserRepository.Result>
}

export namespace LoadUserRepository {
  export type Result = User
}