import { Express } from "express"
import { bodyParser, cors, contentType } from "@src/main/middlewares/index"

export default function (app: Express): void {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}