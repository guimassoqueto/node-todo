import { Encrypter } from "@src/adapters/crypto/interface/crypto";
import jwt from "jsonwebtoken"

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) {}

  async encrypt(plaintext: string): Promise<string> {
    const token = jwt.sign({ id: plaintext }, this.secret, { expiresIn: "1h" })
    return await Promise.resolve(token)
  }
}