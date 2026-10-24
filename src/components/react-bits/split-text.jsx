"use client";

import { motion } from "motion/react";

// React Bits "SplitText": letters spring in one by one when scrolled into view.
export function SplitText({ text, className, stagger = 0.035, as: Tag = "span" }) {
  return (
    <Tag className={className} aria-label={text}>
      {[...text].map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          aria-hidden
          className="inline-block"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 180, damping: 14, delay: i * stagger }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </Tag>
  );
}
