"use client";

import { motion } from "motion/react";

const FROM = {
  up: { y: 40 },
  left: { x: -60 },
  right: { x: 60 },
  scale: { scale: 0.9 },
};

// Spring scroll-reveal wrapper used across sections.
export function Reveal({ children, from = "up", delay = 0, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...FROM[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 90, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}
