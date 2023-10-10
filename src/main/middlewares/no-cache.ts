import { Request, Response, NextFunction } from "express";

export function noCache(req: Request, res: Response, next: NextFunction): void {
  res.setHeader('cache-control', 'no-cache, no-store, must-revalidate, proxy-revalidate')
  res.setHeader('expires', '0')
  res.setHeader('surrogate-control', 'no-store')
  next()
}