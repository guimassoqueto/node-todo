import { Middleware } from "@src/adapters/middlewares/interfaces/middleware"
import { Request, Response, NextFunction } from "express"

export function expressMiddlewareProxy(middleware: Middleware) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const httpRequest = {
      accessToken: req.headers['x-access-token'],
      ...(req.headers || {})
    }
    const httpResponse = await middleware.handle(httpRequest)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.body
      })
    }
  }
}