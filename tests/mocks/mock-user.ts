import { User } from "@src/core/user/model/user";
import { faker } from "@faker-js/faker"


export function mockUser(): User {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
}