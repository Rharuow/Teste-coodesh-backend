import { Request, Response } from "express";
import { validationResult } from "express-validator";

export const home = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty())
    return res.status(422).json({ errors: errors.array() });

  try {
    return res
      .status(200)
      .json({ message: "Fullstack Challenge 🏅 - Space X API" });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Sorry, something is worng at home router..." });
  }
};
