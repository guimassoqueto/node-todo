import express from "express";
import { setMiddlewares } from "./middlewares"
import { routes } from "./routes";

const app = express()
setMiddlewares(app)
routes(app)

export default app