import { User } from "@src/core/user/model/user";

export interface LoadUserByEmail {
  load(email: string): Promise<User | null>
}

export interface AuthenticateUser {
  authenticate(email: string, password: string): Promise<string | null>
}

export interface SaveUser {
  save(user: User): Promise<User>
}

export interface LoadUserById {
  load(id: string): Promise<User | null>
}