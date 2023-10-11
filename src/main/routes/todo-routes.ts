import { Router } from "express";
import { onlyUsersAuthorization } from "../middlewares/authentication";
import { expressRouteAdapter } from "../adapters/express-route-adapter";
import { makeCreateTodoController } from "../factories/create-todo-controller";
import { makeGetTodosController } from "../factories/get-todos-controller"
import { makeGetTodoController } from "../factories/get-todo-controller"


export default function(router: Router): void {
  router.post("/todo", onlyUsersAuthorization, expressRouteAdapter(makeCreateTodoController()))
  router.get("/todos", onlyUsersAuthorization, expressRouteAdapter(makeGetTodosController()))
  router.get("/todo/:id", onlyUsersAuthorization, expressRouteAdapter(makeGetTodoController()))
}