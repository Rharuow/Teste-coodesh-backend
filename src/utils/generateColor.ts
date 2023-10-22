// @ts-ignore
import CompColors from "complementary-colors";

export const handleColor = (color: string) => {
  const newColor = new CompColors(color).square()[2];
  return `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`;
};
