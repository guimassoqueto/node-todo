import express from "express";
import { setMiddlewares } from "./middlewares"
import { routes } from "./routes";
import swagger from "./config-swagger"

const app = express()
swagger(app)
setMiddlewares(app)
routes(app)

export default app