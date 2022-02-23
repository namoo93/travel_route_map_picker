import express, { Request, Response } from "express";
import body from "express-validator";
const memberRouter = express.Router();

memberRouter.post("/signin", (req: Request, res: Response) => {
  let { id, password } = req.body;
  res.send(req.body);
});
memberRouter.post("/signup", (req: Request, res: Response) => {
  let {
    id,
    password,
    nickname,
  }: { id: string; password: string; nickname: string } = req.body;
  res.send(req.body);
});

export default memberRouter;
