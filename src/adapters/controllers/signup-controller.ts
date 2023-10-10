import { Validator } from "./helpers/validation/validator";
import {
  BadRequest,
  conflict,
  HTTPResponse,
  created,
  serverError,
} from "./helpers/http-reponses";
import { Controller } from "./interfaces/controller";
import { LoadUserByEmail } from "../db/interfaces/db";
import { SaveUserDb } from "../db/save-user-db";

export namespace SignUpController {
  export type Request = {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
  };
}

export class SignUpController
  implements Controller<SignUpController.Request> {
  constructor(
    private readonly validator: Validator,
    private readonly loadUserByEmailDb: LoadUserByEmail,
    private readonly saveUserDb: SaveUserDb,
  ) {}

  async handle(request: SignUpController.Request): Promise<HTTPResponse> {
    try {
      const error = this.validator.validate(request);
      if (error) return BadRequest(error);

      const { name, email, password } = request;

      const loadedUser = await this.loadUserByEmailDb.load(request.email);
      if (loadedUser) return conflict("email already in use");

      const currentDate = new Date();
      const savedUser = await this.saveUserDb.save({
        name,
        email,
        password,
        createdAt: currentDate,
        updatedAt: currentDate,
      });

      return created(savedUser);
    } catch (error) {
      return serverError();
    }
  }
}
