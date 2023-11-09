import { Request, Response } from "express";

export const home = (_: Request, res: Response) => {
  try {
    // return the welcome message
    return res
      .status(200)
      .json({ message: "Fullstack Challenge 🏅 - Space X API" });
  } catch (error) {
    // return the error message in the status code 400
    return res
      .status(400)
      .json({ message: "Sorry, something is worng at home router..." });
  }
};
