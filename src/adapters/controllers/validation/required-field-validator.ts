import { MissingParamError } from "@src/errors/missing-param-error";
import { Validator } from "./validator";

export class RequiredFieldValidator implements Validator {
  constructor(private readonly fieldName: string) {}

  validate(input: any): Error | null {
    if (input[this.fieldName] === undefined) return new MissingParamError(this.fieldName);
    return null;
  }
}
