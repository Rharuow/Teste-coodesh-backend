import fetch from "node-fetch";

export const home = (req, res) => {
  return res.json({ message: "Fullstack Challenge 🏅 - Space X API" });
};
