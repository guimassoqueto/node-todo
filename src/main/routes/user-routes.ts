import { Router } from "express";
import { expressRouteAdapter } from "@src/main/adapters/express-route-adapter"

import { Request, Response } from "express";


export default function(router: Router): void {
  router.get("/signup", test)
}

function test(req: Request, res: Response) {
  return res.json({"ok": "ok"})
}