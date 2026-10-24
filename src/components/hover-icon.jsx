"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

// itshover-style icon: a lucide glyph that animates when its icon (or `trigger` parent group) is hovered.
const VARIANTS = {
  pop: { scale: 1.22, rotate: 8 },
  wiggle: { rotate: [0, -14, 14, -10, 10, 0], transition: { duration: 0.6 } },
  bounce: { y: [0, -5, 0, -3, 0], transition: { duration: 0.6 } },
  nudge: { x: [0, 5, 0], transition: { duration: 0.5 } },
  spin: { rotate: 180 },
};

export function HoverIcon({ icon: Icon, variant = "pop", className, ...props }) {
  return (
    <motion.span
      className="inline-flex"
      whileHover={VARIANTS[variant]}
      transition={{ type: "spring", stiffness: 320, damping: 12 }}
    >
      <Icon className={cn("size-5", className)} aria-hidden {...props} />
    </motion.span>
  );
}
