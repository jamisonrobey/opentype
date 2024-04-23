import { useTypingTest } from "../context/TypingTestContext";
import { Chart } from "./Chart";
export const TestResults = () => {
  const { accuracyMetrics, elapsedTime, gameMode, duration, language } =
    useTypingTest();

  return (
    <div className="w-4/6  h-[300px] border  border-red-500 ">
      <Chart />
    </div>
  );
};
