"use client";
import { useEffect } from "react";
import { useTypingTest } from "../context/TypingTestContext";
export const WordStreamer = () => {
  const { gameMode, language, words, typedWords, setWords } = useTypingTest();

  const streamWords = () => {
    if (gameMode === "time") {
      if (words.length - typedWords.length <= 20) {
        fetchMoreWords();
      }
    } else if (gameMode === "words") {
      // No need to stream words in word mode
    } else if (gameMode === "quote") {
      // No need to stream words in quote mode
    }
  };

  const fetchMoreWords = () => {
    fetch(`/api/words?numWords=25&mode=${gameMode}&lang=${language}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setWords((prevWords) => [...prevWords, ...data.words]);
      })
      .catch((error) => {
        console.error("Error fetching more words:", error);
      });
  };

  useEffect(() => {
    streamWords();
  }, [gameMode, language, words, typedWords]);

  return null;
};
