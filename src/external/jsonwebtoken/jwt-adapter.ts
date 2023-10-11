import { Decrypter, Encrypter } from "@src/adapters/crypto/interface/crypto";
import jwt from "jsonwebtoken"

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encryptId(data: Encrypter.Params): Promise<string> {
    const token = jwt.sign(data, this.secret, { expiresIn: "1h" })
    return await Promise.resolve(token)
  }

  decryptId(token: string): Decrypter.Result {
    const result = jwt.verify(token, this.secret)
    return result as Decrypter.Result
  }
}