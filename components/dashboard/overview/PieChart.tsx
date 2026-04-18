"use client";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
export const description = "A simple pie chart";

const chartConfig = {
  count: {
    label: "Count",
  },
} satisfies ChartConfig;
export function PieChartPage({ data }: any) {
  const colors = ["#3D454E", "#84cc16", "#F05223"];

  const pieChartData = data?.map((item: any, index: number) => ({
    category: item.category.toUpperCase(),
    count: item.count,
    fill: colors[index],
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Rating Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto  max-h-[250px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie data={pieChartData} dataKey="count" nameKey="category" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
