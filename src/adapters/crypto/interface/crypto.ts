export interface Hasher {
  hash(plaintext: string): Promise<string>
}

export interface HashComparer {
  compare(plaintext: string, hash: string): Promise<boolean>
}

export interface Encrypter {
  encrypt(plaintext: string): Promise<string>
}