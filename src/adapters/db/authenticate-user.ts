import { LoadUserRepository } from "@src/core/user/services/load-user-repository";
import { AuthenticateUser } from "./interfaces/db";
import { Encrypter, HashComparer } from "../crypto/interface/crypto";
import { UpdateAccessTokenRepository } from "@src/core/user/services/update-access-token-repository";

export class AuthenticateUserDb implements AuthenticateUser {
  constructor(
    private readonly loadByEmailRepository: LoadUserRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepository: UpdateAccessTokenRepository
  ) {}

  async authenticate(email: string, password: string): Promise<string | null> {
    const user = await this.loadByEmailRepository.loadByEmail(email)
    if (!user) return null

    const passwordIsValid = await this.hashComparer.compare(password, user.password)
    if (!passwordIsValid) return null

    const accessToken = await this.encrypter.encrypt(user.id!)
    await this.updateAccessTokenRepository.updateAccessToken(user.id!, accessToken)

    return accessToken
  }
}