export interface Hasher {
  hash(plaintext: string): Promise<string>
}

export interface HashComparer {
  compare(plaintext: string, hash: string): Promise<boolean>
}

export namespace Encrypter {
  export type Params = {
    id: string
  }
}
export interface Encrypter {
  encryptId(data: Encrypter.Params): Promise<string>
}

export namespace Decrypter {
  export type Result = {
    id: string
  }
}
export interface Decrypter {
  decryptId(token: string): Decrypter.Result
}