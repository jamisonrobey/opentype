"use client";
import { ResponsiveLine, Serie } from "@nivo/line";
import { useTypingTest } from "../context/TypingTestContext";
import { roboto_mono } from "@/app/layout";
export const Chart = () => {
  const { accuracyMetrics, theme } = useTypingTest();
  type ChartData = {
    id: string | number;
    data: Array<{
      x: number | string | Date;
      y: number | string | Date;
    }>;
  };

  const getChartData = () => {
    const wpmData = {
      id: "wpm",
      data: accuracyMetrics.wpmOverTime.map((wpm, i) => ({
        x: i,
        y: wpm,
      })),
    } as Serie;

    const rawWpmData = {
      id: "rawWpmData",
      data: accuracyMetrics.rawWpmOverTime.map((wpm, i) => ({
        x: i,
        y: wpm,
      })),
    } as Serie;
    return [wpmData, rawWpmData];
  };

  // https://github.com/plouc/nivo/issues/524#issuecomment-628296620 <- legend
  const valuesToShow = getChartData().map((v, i) => (i % 2 === 0 ? "" : v));

  const median = (values: number[]) => {
    values.sort((a, b) => a - b); // Sort the array in ascending order
    const middle = Math.floor(values.length / 2); // Find the middle index

    if (values.length % 2 === 0) {
      // If the array length is even, average the two middle numbers
      return (values[middle - 1] + values[middle]) / 2;
    } else {
      // If the array length is odd, return the middle number
      return values[middle];
    }
  };

  return (
    <div className="h-full">
      <ResponsiveLine
        data={getChartData()}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
        }}
        fill={[]}
        theme={{
          grid: {
            line: {
              stroke: theme.colors.bgDarkColor,
              strokeWidth: 0.5,
            },
          },
          axis: {
            ticks: {
              text: {
                fill: theme.colors.textColor,
              },
            },
            legend: {
              text: {
                fill: theme.colors.textColor,
                fontSize: 24,
              },
            },
          },
        }}
        enableArea={true}
        areaOpacity={0.1}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickRotation: 0,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 10,
          tickValues: [
            0,
            Math.round(Math.max(...accuracyMetrics.rawWpmOverTime) / 2),
            Math.round(Math.max(...accuracyMetrics.rawWpmOverTime)),
          ],
          tickRotation: 0,
          legend: "Words per Minute",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        colors={[theme.colors.accentColor, theme.colors.textColor]}
        pointSize={0}
        enableTouchCrosshair={true}
        useMesh={true}
      />
    </div>
  );
};
