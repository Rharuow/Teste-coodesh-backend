import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  try {
    return res
      .status(200)
      .json({ message: "Fullstack Challenge 🏅 - Space X API" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Sorry, something is worng at home router..." });
  }
};
