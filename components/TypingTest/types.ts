/* Mode Selector Types */

// whether to include punctuation or numbers in text body, if quote mode this not selectable
export type allowed = "punctuation" | "numbers";

export type IncludePuncNums = allowed[];

// game modes: https://monkeytype.com/
export type GameMode = "words" | "time" | "quote";

// various durations of modes
export type WordsModeDuration = 10 | 25 | 50 | 100;
export type TimeModeDuration = 15 | 30 | 60 | 120;
export type QuoteModeDuration = "all" | "short" | "medium" | "long" | "thicc";

export type Duration = WordsModeDuration | TimeModeDuration | QuoteModeDuration;

/* languages */

export type Language = "english-1k" | "english-5k" | "english-10k";

export type GamePhase = "notStarted" | "inProgress" | "over";

export interface AccuracyMetrics {
  correct: number;
  total: number;
  chartData: { name: string; wpm: number; raw: number }[];
}
