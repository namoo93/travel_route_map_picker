import express, { Request, Response } from "express";
const memberRouter = express.Router();

memberRouter.post("/", (req: Request, res: Response) => {
  let { id, password } = req.body;
});

export default memberRouter;
