import { Hasher } from "../crypto/interface/crypto";
import { SaveUserRepository } from "@src/core/user/services/save-user-repository"; 

export class SaveUserDb implements SaveUserRepository {
  constructor(
    private readonly saveUserRepository: SaveUserRepository,
    private readonly passwordHasher: Hasher
  ) {}

  async save(user: SaveUserRepository.Params): Promise<SaveUserRepository.Result> {
    const hashedPassword = await this.passwordHasher.hash(user.password)
    const savedUser = await this.saveUserRepository.save({...user, password: hashedPassword})
    return savedUser
  }
}