import { HTTPResponse } from "../../helpers/http-reponses";

export interface Controller<Req = any> {
  handle(request: Req): Promise<HTTPResponse>;
}
