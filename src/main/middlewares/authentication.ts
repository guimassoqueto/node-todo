import { makeAuthMiddleware } from "../factories/auth-middleware";
import { expressMiddlewareProxy } from "../adapters/express-middleware-proxy";

export const onlyUsersAuthorization = expressMiddlewareProxy(makeAuthMiddleware())