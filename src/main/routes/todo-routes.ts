import { Router } from "express";
import { onlyUsersAuthorization } from "../middlewares/authentication";
import { expressRouteAdapter } from "../adapters/express-route-adapter";
import { makeCreateTodoController } from "../factories/create-todo-controller";
import { makeGetTodosController } from "../factories/get-todos-controller"
import { makeGetTodoController } from "../factories/get-todo-controller"
import { makeDeleteTodoController } from "../factories/delete-todo-controller"
import { makeUpdateTodoController } from "../factories/update-todo-controller"


export default function(router: Router): void {
  router.post("/todos", onlyUsersAuthorization, expressRouteAdapter(makeCreateTodoController()))
  router.get("/todos", onlyUsersAuthorization, expressRouteAdapter(makeGetTodosController()))
  router.get("/todo/:id", onlyUsersAuthorization, expressRouteAdapter(makeGetTodoController()))
  router.delete("/todo/:id", onlyUsersAuthorization, expressRouteAdapter(makeDeleteTodoController()))
  router.put("/todo/:id", onlyUsersAuthorization, expressRouteAdapter(makeUpdateTodoController()))
}