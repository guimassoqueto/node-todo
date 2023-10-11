import { Middleware } from "@src/adapters/middlewares/interfaces/middleware";
import { AuthMiddleware } from "@src/adapters/middlewares/auth-middleware";
import { JwtAdapter } from "@src/external/jsonwebtoken/jwt-adapter";
import { JWT_SECRET } from "@src/settings";

export function makeAuthMiddleware(): Middleware {
  const decrypter = new JwtAdapter(JWT_SECRET)
  return new AuthMiddleware(decrypter)
}