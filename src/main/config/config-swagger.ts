import { Express } from "express"
import { noCache } from "../middlewares"
import swagger from "swagger-ui-express"
import swaggerDoc from "../docs"

export default function (app: Express): void {
  app.use("/api-docs", noCache, swagger.serve, swagger.setup(swaggerDoc))
}