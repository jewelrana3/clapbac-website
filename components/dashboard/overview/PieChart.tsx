import React from "react";

const PieChart = ({ data }: any) => {
  const newCount = data?.map(
    ({ category, count }: { category: string; count: number }) => ({
      percent: count === 0 ? 32 : count,
      color:
        category === "bad"
          ? "#3D44E5"
          : category === "average"
          ? "#C5D92D"
          : "#F05223",
    })
  );

  // Convert percentages to SVG arc paths
  const createArc = (startAngle: number, endAngle: number) => {
    const radius = 80;
    const x1 = 100 + radius * Math.cos((Math.PI * startAngle) / 180);
    const y1 = 100 + radius * Math.sin((Math.PI * startAngle) / 180);
    const x2 = 100 + radius * Math.cos((Math.PI * endAngle) / 180);
    const y2 = 100 + radius * Math.sin((Math.PI * endAngle) / 180);
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    return `M100,100 L${x1},${y1} A${radius},${radius} 0 ${largeArc},1 ${x2},${y2} Z`;
  };

  let currentAngle = 0;

  return (
    <div className="max-w-md mx-auto p-6 bg-[#F8F8F8]">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Rating Distribution
      </h2>
      <div className="flex items-center justify-center">
        {" "}
        <svg width="200" height="200" viewBox="0 0 200 200">
          {newCount?.map((segment: any, index: number) => {
            const start = currentAngle;
            const end = currentAngle + (segment.percent / 100) * 360;
            const path = createArc(start, end);
            currentAngle = end;
            return (
              <path
                key={index}
                d={path}
                fill={segment.color}
                stroke="white"
                strokeWidth="10"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default PieChart;
