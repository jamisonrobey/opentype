import { useTypingTest } from "../context/TypingTestContext";
export const TestResults = () => {
  const { accuracyMetrics, elapsedTime, gameMode, duration, language } =
    useTypingTest();
  const accuracy = Math.trunc(
    (accuracyMetrics.correct / accuracyMetrics.total) * 100
  );
  const { correct, total } = accuracyMetrics;
  return (
    <div className="flex flex-col items-center  border border-red-500 justify-center">
      <p>wpm: {Math.trunc((correct / 5) * (60 / elapsedTime))}</p>
      <p>acc: {(correct / total) * 100}%</p>
      <p>raw: {Math.trunc((total / 5) * (60 / elapsedTime))}</p>
      <p>
        Test type: {gameMode}, {duration} {language}
      </p>
      <p>
        Characters: {correct} / {total - correct}
      </p>
    </div>
  );
};
