import { LoadUserByEmail } from "./interfaces/db";
import { LoadUserRepository } from "@src/core/user/services/load-user-repository";

export class LoadUserByEmailDb implements LoadUserByEmail {
  constructor(private readonly loadUserRepository: LoadUserRepository) {}

  async load(email: string): Promise<LoadUserRepository.Result | null> {
    const user = await this.loadUserRepository.byEmail(email);
    if (!user) return null;
    return user;
  }
}
