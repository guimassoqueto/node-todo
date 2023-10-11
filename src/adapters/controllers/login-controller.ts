import { AuthenticateUser } from "../db/interfaces/db-user";
import {
  BadRequest,
  HTTPResponse,
  ok,
  serverError,
  unauthorized,
} from "../helpers/http-reponses";
import { Validator } from "./validation";
import { Controller } from "./interfaces/controller";

export namespace LoginController {
  export type Request = {
    email: string;
    password: string;
  };
}

export class LoginController implements Controller {
  constructor(
    private readonly validator: Validator,
    private readonly authenticateUser: AuthenticateUser,
  ) {}

  async handle(request: LoginController.Request): Promise<HTTPResponse> {
    try {
      const error = this.validator.validate(request);
      if (error) return BadRequest(error);

      const { email, password } = request;
      const accessToken = await this.authenticateUser.authenticate(
        email,
        password,
      );
      if (!accessToken) return unauthorized();

      return ok({ accessToken });
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
