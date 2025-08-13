import { NextFunction, Request, Response } from "express";

const errorHandler = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error);
  res.status(500).send("Somthing went wrong");
};

export default errorHandler;
