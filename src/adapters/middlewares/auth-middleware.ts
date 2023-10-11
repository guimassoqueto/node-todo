import { Decrypter } from "../crypto/interface/crypto";
import { HTTPResponse, forbidden, ok, serverError } from "../helpers/http-reponses";
import { Middleware } from "./interfaces/middleware";

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}

export class AuthMiddleware implements Middleware {
  constructor (private readonly decrypter: Decrypter) {}
  async handle(request: AuthMiddleware.Request): Promise<HTTPResponse> {
    try {
      const { accessToken } = request
      if (!accessToken) return forbidden()

      let userId: string
      try {
        userId = this.decrypter.decryptId(accessToken).id
        return ok({ userId })
      } catch (error) {
        return forbidden()
      }
    } catch (error) {
      return serverError()
    }
  }
}
