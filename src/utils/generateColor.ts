export const generateRandomColor: (colorRGB: string) => string = (
  colorRGB: string
) => {
  try {
    const [r, g, b] = calculateColor(colorRGB);

    return `rgb(${r}, ${g}, ${b})`;
  } catch (error) {
    throw new Error(error.message);
  }
};

function calculateColor(color: string) {
  if (!color.includes("rgb("))
    throw new Error("The color string does not contain 'rgb('");

  // create a variant random gap between 80 and 100
  const variant = Math.floor(Math.random() * 100 + 80);

  // split the string at the 3 pattern colors rgb.
  const rgb = color
    .trim() // remove white spaces
    .split("(")[1] // get after the first '(' character
    .replace(")", "") // removing the ')' character
    .split(",") // split in array to each comma
    .map((elColor) => Number(elColor)); // converting to number

  if (rgb.length !== 3) throw new Error("Missing RGB components");
  if (rgb.some((elColor) => isNaN(elColor)))
    throw new Error("parameter must be a number");

  // generate colors red, green and blue according rgb patterns.
  return rgb.map((color, index) =>
    color <= 255 - variant
      ? color + variant
      : color >= variant
      ? color - variant
      : index % 2 === 0
      ? variant + 50
      : variant
  );
}
