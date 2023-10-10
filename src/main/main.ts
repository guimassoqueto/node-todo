import { APP_PORT, APP_URL, MONGO_URL } from "@src/settings"
import { MongoHelper } from "@src/external/mongodb/mongo-helper"

const mongodb = MongoHelper.getInstance()

mongodb.connect(MONGO_URL)
.then(async () => {
  const app = (await (import("./config/app"))).default
  app.listen(APP_PORT, () => {
    console.info(`server is running at ${APP_URL}`)
  })
})
.catch((error) => {
  console.error(error)
})
