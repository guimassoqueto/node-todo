import { Hasher, HashComparer } from "@src/adapters/crypto/interface/crypto";
import bcrypt from "bcrypt"

export class BcyptAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}
  
  async hash(plaintext: string): Promise<string> {
    const hashedValue = await bcrypt.hash(plaintext, this.salt)
    return hashedValue
  }

  async compare(plaintext: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(plaintext, hash)
    return isValid
  }
}