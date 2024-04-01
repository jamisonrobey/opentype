/*
Mode selector composed of different selectable options, which also effect the other selections that are available.
*/

// whether to include punctuation or numbers in text body, if quote mode then not selectable
export type PunctuationNumbers = "punctuation" | "numbers";
// mode of test, words (type amount of words), time (type until timer runs out), quote (type the quote)
export type WordsTimeQuote = "words" | "time" | "quote"; //

/* The various types of lengths corresponding to WordsTimeQuote */
export type WordsLength = 10 | 25 | 50 | 100; // words (to type)
export type TimeLength = 15 | 30 | 60 | 120; // seconds countdown
export type QuoteLength = "short" | "medium" | "long"; // quote length (char)

export type Length = WordsLength | TimeLength | QuoteLength;
