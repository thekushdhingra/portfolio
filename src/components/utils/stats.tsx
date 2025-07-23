import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Pie, PieChart, Label } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "@/components/ui/skeleton";
import { BlurFade } from "@/components/magicui/blur-fade";
import { StatsType } from "@/types";

interface StatsProps {
  stats: StatsType | null;
  delay: number;
}

const chartColors = [
  "#7F5AF0",
  "#2CB67D",
  "#FF7F50",
  "#FFD803",
  "#F15BB5",
  "#00C4CC",
  "#A786DF",
  "#232946",
];

export default function Stats({ stats, delay }: StatsProps) {
  const languages =
    stats?.waka.languages?.map((lang, idx) => ({
      name: lang.name,
      value: lang.total_seconds,
      fill: chartColors[idx % chartColors.length],
      formattedTime: formatTime(lang.total_seconds),
    })) ?? [];

  const totalSeconds = React.useMemo(
    () => languages.reduce((acc, curr) => acc + curr.value, 0),
    [languages]
  );

  if (!stats) {
    return <Skeleton className="w-[70%] h-40 mb-4" />;
  }

  return (
    <BlurFade delay={delay}>
      <Card className="flex flex-col">
        <CardHeader className="items-center pb-0">
          <CardTitle>Coding Time Stats</CardTitle>
          <CardDescription className="text-muted-foreground">
            Total coding time and language breakdown
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={{}}
            className="mx-auto aspect-square max-h-[500px]"
          >
            <PieChart width={500} height={500}>
              <ChartTooltip
                cursor={false}
                content={({ payload }) => {
                  if (!payload || !payload.length) return null;
                  const lang = payload[0].payload;
                  return (
                    <div className="p-2 bg-background rounded-md shadow text-sm border border-border">
                      <div className="font-semibold flex flex-row items-center gap-2">
                        <span
                          className="inline-block w-3 h-3 rounded-full"
                          style={{ background: lang.fill }}
                        />
                        {lang.name}
                      </div>
                      <div className="text-muted-foreground">
                        {lang.formattedTime}
                      </div>
                    </div>
                  );
                }}
              />

              <Pie
                data={languages}
                dataKey="value"
                nameKey="name"
                innerRadius={120}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-2xl font-bold"
                          >
                            {stats.waka.human_readable_total}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 20}
                            className="fill-muted-foreground text-xs"
                          >
                            Total Time
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="leading-none">Languages Breakdown:</div>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            {languages
              .filter((lang) => lang.formattedTime !== "")
              .map((lang, idx) => {
                const percent = ((lang.value / totalSeconds) * 100).toFixed(1);
                return (
                  <div
                    key={`${lang.name}-${idx}`}
                    className="flex items-center gap-2 border border-border p-2 rounded-md"
                  >
                    <span
                      className="inline-block w-3 h-3 rounded-full"
                      style={{ background: lang.fill }}
                    />
                    <span className="text-sm">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {lang.formattedTime} ({percent}%)
                    </span>
                  </div>
                );
              })}
          </div>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}

function formatTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  if (hours === 0 && minutes === 0) return "";
  return `${hours}h ${minutes}m`;
}
