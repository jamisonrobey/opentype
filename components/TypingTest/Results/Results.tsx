import { useTypingTest } from "@/components/context/TypingTestContext";
import { Chart } from "./Chart";

const getConsistencyPercentage = (wpmArr: number[]): number => {
  const mean = wpmArr.reduce((sum, wpm) => sum + wpm, 0) / wpmArr.length;
  const squaredDifferences = wpmArr.map((wpm) => Math.pow(wpm - mean, 2));
  const variance =
    squaredDifferences.reduce((sum, diff) => sum + diff, 0) / wpmArr.length;
  const stdDev = Math.sqrt(variance);
  const oneStdDev = wpmArr.filter(
    (wpm) => Math.abs(wpm - mean) <= stdDev
  ).length;
  return (oneStdDev / wpmArr.length) * 100;
};

export const Results = () => {
  const {
    gameMode,
    duration,
    language,
    elapsedTime,
    typedWords,
    accuracyMetrics,
  } = useTypingTest();

  const accuracyPercentage = Math.floor(
    (accuracyMetrics.correct / accuracyMetrics.total) * 100
  );
  const wpm = (accuracyMetrics.correct / elapsedTime) * 60;
  const eWpm = wpm / 5;
  const rawWpm = (accuracyMetrics.total / elapsedTime) * 60;
  const eRawWpm = rawWpm / 5;
  const wpmArr = accuracyMetrics.chartData.map((data) => data.wpm);
  return (
    <div className="w-3/4 ">
      <div className=" grid grid-cols-6">
        <div className="col-span-1 space-y-4 row-span-4">
          <span className="text-4xl flex flex-col">
            wpm
            <span className={`text-[var(--accent-color)] text-6xl`}>
              {Math.floor(eWpm)}
            </span>
          </span>
          <span className="text-4xl flex flex-col">
            acc{" "}
            <span className={`text-[var(--accent-color)] text-6xl`}>
              {accuracyPercentage}%
            </span>
          </span>
        </div>
        <div className="h-[200px] col-span-5">
          <Chart />
        </div>
      </div>
      <div className="grid grid-cols-4 mt-8 space-y-4">
        <span className="flex flex-col text-xl">
          test type
          <span className="text-[var(--accent-color)] text-base">{`${gameMode} ${duration}`}</span>
          <span className="text-[var(--accent-color)] text-base">
            {language}
          </span>
        </span>
        <span className="flex flex-col text-xl">
          characters
          <span className="text-4xl text-[var(--accent-color)]">{`${
            accuracyMetrics.correct
          }/${accuracyMetrics.total - accuracyMetrics.correct}`}</span>
        </span>
        <span className="flex flex-col text-xl">
          time
          <span className="text-4xl text-[var(--accent-color)]">
            {elapsedTime}
          </span>
        </span>
        <span className="flex flex-col text-xl">
          words
          <span className="text-4xl text-[var(--accent-color)]">
            {typedWords.length}
          </span>
        </span>
        <span className="flex flex-col text-xl">
          raw
          <span className="text-4xl text-[var(--accent-color)]">
            {Math.floor(eRawWpm)}
          </span>
        </span>
        <span className="flex flex-col text-xl">
          consistency
          <span className="text-4xl text-[var(--accent-color)]">
            {Math.floor(getConsistencyPercentage(wpmArr))}%
          </span>
        </span>
      </div>
    </div>
  );
};
