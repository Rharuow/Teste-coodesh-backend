interface RGB {
  r: number;
  g: number;
  b: number;
}

export const handleColor = (color: string) => {
  const variant = Math.floor(Math.random() * 100 + 80);

  const rgb = [
    Number(color.split("(")[1].split(",")[0]),
    Number(color.split("(")[1].split(",")[1]),
    Number(color.split("(")[1].split(",")[2]),
  ];

  const [r, g, b] = rgb.map((c, index) =>
    c <= 255 - variant
      ? c + variant
      : c >= variant
      ? c - variant
      : index % 2 === 0
      ? variant + 50
      : variant
  );

  return `rgb(${r}, ${g}, ${b})`;
};
