import { Validator } from "@src/adapters/controllers/helpers/validator";

export class ValidatorSpy implements Validator {
  input: any;
  result: Error | null = null;

  validate(input: any): Error | null {
    this.input = input;
    return this.result;
  }
}
