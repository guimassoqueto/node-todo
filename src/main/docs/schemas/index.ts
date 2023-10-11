import { signupSchema } from './user/signup/signup-schema'
import { signupResponseSchema } from './user/signup/signup-response-schema'
import { loginSchema } from './user/login/login-schema'
import { todoSchema } from './todo/todo-schema'
import { todoPostSchema } from './todo/todo-post-schema'
import { todosSchema } from './todo/todos-schema'
import { loginResponseSchema } from './user/login/login-response-schema'
import { errorSchema } from './error/error-schema'
import { apiKeyAuthSchema } from './auth/api-key-auth-schema'
import { todoResponseSchema } from './todo/todo-response-schema'

export const schemas = {
  loginResponse: loginResponseSchema,
  login: loginSchema,
  signup: signupSchema,
  signupResponse: signupResponseSchema,
  todoResponse: todoResponseSchema,
  todo: todoSchema,
  todoPost: todoPostSchema,
  todos: todosSchema,
  error: errorSchema,
}

export const securitySchemes = {
  apiKeyAuth: apiKeyAuthSchema
}
