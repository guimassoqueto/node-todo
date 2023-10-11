import { Router } from "express";
import { onlyUsersAuthorization } from "../middlewares/authentication";

import { Request, Response } from "express";

export default function(router: Router): void {
  router.get("/test", onlyUsersAuthorization, (req: Request, res: Response) => {
    return res.json({"msg": "you have access"})
  })
}