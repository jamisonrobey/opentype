"use client";
import { useEffect, useState } from "react";
import { useTypingTest } from "../context/TypingTestContext";
import { init } from "next/dist/compiled/webpack/webpack";

interface WordRendererProps {
  initialWords: string[];
}

export const WordRenderer = ({ initialWords }: WordRendererProps) => {
  return (
    <div className="text-2xl w-3/4 mb-4 h-24 overflow-auto no-scrollbar relative">
      {initialWords.map((word, index) => (
        <span className={`inline-block mr-6`}>{word}</span>
      ))}
    </div>
  );
};
