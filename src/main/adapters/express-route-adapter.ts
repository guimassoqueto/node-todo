import { Controller } from "@src/adapters/controllers/interfaces/controller";
import { Request, Response } from "express";

export function expressRouteAdapter(controller: Controller) {
  return async (req: Request, res: Response) => {
    const request = {
      ...(req.query || {}),
      ...(req.body || {}),
      ...(req.params || {}),
      userId: req.userId,
    };
    const response = await controller.handle(request);
    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.status(response.statusCode).json(response.body);
    } else {
      res.status(response.statusCode).json({
        error: response.body,
      });
    }
  };
}
