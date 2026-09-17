"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
};

export function AnimatedText({ text, className = "", delay = 0, as: Tag = "h1" }: AnimatedTextProps) {
  const lines = text.split("\n");
  let totalWordIndex = 0;

  return (
    <Tag className={className}>
      {lines.map((line, lineIdx) => {
        const words = line.split(" ").filter(Boolean);
        return (
          <span key={lineIdx} className="block">
            {words.map((word, wordIdx) => {
              const currentDelay = delay + totalWordIndex * 0.08;
              totalWordIndex++;
              return (
                <motion.span
                  key={wordIdx}
                  className="inline-block mr-[0.3em] last:mr-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: currentDelay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {word}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}
