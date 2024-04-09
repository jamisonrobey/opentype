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

export enum Language {
  English1k = "english-1k",
  English5k = "english-5k",
  English10k = "english-10k",
}
