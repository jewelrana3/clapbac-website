export const createArc = (startAngle: number, endAngle: number) => {
  const radius = 80;
  const x1 = 100 + radius * Math.cos((Math.PI * startAngle) / 180);
  const y1 = 100 + radius * Math.sin((Math.PI * startAngle) / 180);
  const x2 = 100 + radius * Math.cos((Math.PI * endAngle) / 180);
  const y2 = 100 + radius * Math.sin((Math.PI * endAngle) / 180);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M100,100 L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
};
