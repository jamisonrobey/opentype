/* Mode Selector Types */

// whether to include punctuation or numbers in text body, if quote mode this not selectable
export type allowed = "punctuation" | "numbers";

export type IncludePuncNums = allowed[];

// game modes: https://monkeytype.com/
export type GameMode = "words" | "time" | "quote";

// various durations of modes
export type WordsModeDuration = 10 | 25 | 50 | 100;
export type TimeModeDuration = 15 | 30 | 60 | 120;
export type QuoteModeDuration = "all" | "short" | "medium" | "long";

export type Duration = WordsModeDuration | TimeModeDuration | QuoteModeDuration;

/* languages */

export type Language = "english-1k" | "english-5k" | "english-10k";

export interface AccuracyMetrics {
  correct: number;
  incorrect: number;
  extra: number;
  missed: number;
}
