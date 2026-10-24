"use client";

import { motion } from "motion/react";

// React Bits "BlurText": words fade/unblur in with a spring, staggered.
export function BlurText({ text, className, delay = 0.09, as: Tag = "span" }) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block will-change-[transform,filter,opacity]"
          initial={{ filter: "blur(10px)", opacity: 0, y: -24 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 110, damping: 16, delay: 0.2 + i * delay }}
        >
          {word}
          {i < words.length - 1 && " "}
        </motion.span>
      ))}
    </Tag>
  );
}
