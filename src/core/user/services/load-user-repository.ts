import { User } from "../model/user"

export interface LoadUserRepository {
  loadByEmail(email: string): Promise<LoadUserRepository.Result | null>
}

export namespace LoadUserRepository {
  export type Result = User
}