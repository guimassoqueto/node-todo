import { expressRouteAdapter } from "@src/main/adapters/express-route-adapter"
import { makeSignUpControllerFactory } from "@src/main/factories/signup-controller"
import { makeLoginControllerFactory } from "@src/main/factories/login-controller"
import { Router } from "express";


export default function(router: Router): void {
  router.post("/signup", expressRouteAdapter(makeSignUpControllerFactory()))
  router.post("/login", expressRouteAdapter(makeLoginControllerFactory()))
}