"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

// React Bits "CountUp": number eases from 0 to `to` when scrolled into view.
export function CountUp({ to, suffix = "", duration = 2, className }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, to, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
