import { Hasher } from "@src/adapters/crypto/interface/crypto";
import bcrypt from "bcrypt"

export class BcyptAdapter implements Hasher {
  constructor (private readonly salt: number) {}
  async hash(plaintext: string): Promise<string> {
    const hashedValue = await bcrypt.hash(plaintext, this.salt)
    return hashedValue
  }
}