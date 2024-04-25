"use client";
import { useTypingTest } from "@/components/context/TypingTestContext";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  const { accuracyMetrics, theme } = useTypingTest();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={accuracyMetrics.chartData}>
        <XAxis
          tickLine={{ stroke: theme.colors.bgDarkColor }}
          tickMargin={8}
          tickSize={10}
          dataKey="name"
        />

        <YAxis
          tickLine={{ stroke: theme.colors.bgDarkColor, strokeWidth: "2" }}
          tickMargin={8}
        >
          <Label
            value="Words Per Minute"
            angle={-90}
            offset={-5}
            position={"left"}
            style={{ fontSize: 12, textAnchor: "middle" }}
          />
        </YAxis>

        <CartesianGrid stroke={theme.colors.bgDarkColor} strokeWidth="2" />
        <Area
          type="monotone"
          dataKey="raw"
          dot={false}
          strokeWidth={4}
          stroke={theme.colors.textColor}
          fill={theme.colors.bgDarkColor}
        />
        <Area
          type="monotone"
          dataKey="wpm"
          dot={false}
          strokeWidth={4}
          stroke={theme.colors.accentColor}
          fill={theme.colors.bgDarkColor}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme.colors.bgDarkColor,
            borderColor: theme.colors.bgDarkColor,
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
