export const home = (req, res) => {
  try {
    return res
      .status(204)
      .json({ message: "Fullstack Challenge 🏅 - Space X API" });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ message: "Sorry, something is worng at home router..." });
  }
};
