import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { HTTPResponse } from "@src/adapters/controllers/helpers/http-reponses";
import { Request, Response } from "express";

export function expressRouteAdapter(controller: Controller<any, HTTPResponse>) {
  return async function (req: Request, res: Response) {
    const request = {
      ...(req.query || {}),
      ...(req.body || {}),
      ...(req.params || {}),
      accountId: req.accountId
    }
    const response = await controller.handle(request)
    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body)
    } else {
      res.status(response.statusCode).json({
        error: response.body
      })
    }
  }
}