import { Request, Response, NextFunction } from "express";

export function contentType(req: Request, res: Response, next: NextFunction) {
  res.contentType("application/json")
  next()
}