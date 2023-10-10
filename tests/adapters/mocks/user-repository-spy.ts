import { User } from "@src/core/user/model/user";
import UserRepository from "@src/core/user/services/user-repository";
import { mockUser } from "@tests/mocks/mock-user";


export class UserRepositorySpy implements UserRepository {
  email: string
  result: User | null = mockUser()

  getByEmail(email: string): Promise<User | null> {
    this.email = email 
    return Promise.resolve(this.result)
  }
}