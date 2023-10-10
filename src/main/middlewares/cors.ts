import { Request, Response, NextFunction } from "express";

export function cors(req: Request, res: Response, next: NextFunction): void {
  res.setHeader("Access-Controll-Allow-Origin", "*")
  res.setHeader("Access-Controll-Allow-Methods", "*")
  res.setHeader("Access-Controll-Allow-Headers", "*")
  next()
}