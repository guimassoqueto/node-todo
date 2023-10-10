import "dotenv/config"

export const APP_PORT = process.env.APP_URL ?? "8000"
export const APP_HOST = process.env.APP_HOST ?? "localhost"
export const APP_URL = process.env.APP_URL ?? `${APP_HOST}${APP_PORT}`

const MONGO_ROOT_USERNAME = process.env.MONGO_ROOT_USERNAME ?? "user"
const MONGO_ROOT_PASSWORD = process.env.MONGO_ROOT_PASSWORD ?? "pwd"
const MONGO_HOST = process.env.MONGO_HOST ?? "0.0.0.0"
const MONGO_PORT = process.env.MONGO_PORT ?? "27017"

export const MONGO_DB = process.env.MONGO_DB ?? "app-todo"
export const MONGO_URL = process.env.MONGO_URL ?? `mongodb://${MONGO_ROOT_USERNAME}:${MONGO_ROOT_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`

export const SALT_ROUNDS = Number.parseInt(process.env.SALT_ROUNDS!)
export const JWT_SECRET = process.env.JWT_SECRET!