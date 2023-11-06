import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const resultValidationParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("PIE VALIDATION PARAMS");
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });
  return next();
};
