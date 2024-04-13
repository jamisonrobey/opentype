"use client";
import { useTypingTest } from "../context/TypingTestContext";
export const TestResults = () => {
  const { accuracyMetrics, elapsedTime, words } = useTypingTest();
  const accuracy = Math.trunc(
    (accuracyMetrics.correct / accuracyMetrics.total) * 100
  );
  const wpm = Math.trunc((accuracyMetrics.correct / 5) * (60 / elapsedTime));
  const rawWpm = Math.trunc((accuracyMetrics.total / 5) * (60 / elapsedTime));
  return (
    <>
      Accuracy: {accuracy}% WPM: {wpm} Ram WPM: {rawWpm}
    </>
  );
};
