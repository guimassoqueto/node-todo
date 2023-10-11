import { HTTPResponse } from "@src/adapters/helpers/http-reponses";

export interface Middleware<Req = any>{
  handle(request: Req): Promise<HTTPResponse>
}