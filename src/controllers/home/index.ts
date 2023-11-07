import { Request, Response } from "express";

export const home = (_: Request, res: Response) => {
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
