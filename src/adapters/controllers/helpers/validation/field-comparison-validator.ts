import { InvalidParamError } from "@src/errors/invalid-param-error";
import { Validator } from "./validator";

export class FieldComparisonValidator implements Validator {
  constructor(
    private readonly fieldName: string, 
    private readonly fieldNameToCompare: string
  ) {}

  validate(input: any): Error | null {
    if (input[this.fieldName] !== input[this.fieldNameToCompare]) {
      return new InvalidParamError(this.fieldNameToCompare)
    }
    return null
  }
} 