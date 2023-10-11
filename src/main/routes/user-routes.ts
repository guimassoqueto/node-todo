import { expressRouteAdapter } from "@src/main/adapters/express-route-adapter";
import { makeSignUpController } from "@src/main/factories/signup-controller";
import { makeLoginController } from "@src/main/factories/login-controller";
import { Router } from "express";

export default function (router: Router): void {
  router.post("/signup", expressRouteAdapter(makeSignUpController()));
  router.post("/login", expressRouteAdapter(makeLoginController()));
}
