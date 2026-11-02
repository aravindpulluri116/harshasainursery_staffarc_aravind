"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { nurseryLogoTransparent } from "@/assets/catalogue-images-7";

// Opening loading animation: a ring draws itself around the nursery logo,
// the logo blooms in, the name rises letter by letter, the strapline
// follows, a short hold, then the whole loader lifts away like a curtain to
// reveal the page. Always finishes (hard cap) and respects reduced motion.
const S = 1; // timing scale; keep 1 (used only by the local preview capture)

const NAME = "Harsha Sai Nursery";
const LETTER_START = 1.8;
const LETTER_STAGGER = 0.05;
const LETTER_DUR = 0.5;
const STRAP_AT = LETTER_START + NAME.length * LETTER_STAGGER + LETTER_DUR - 0.6;
const HOLD_END = STRAP_AT + 0.7 + 0.8;

export function Loader() {
  const [hiding, setHiding] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const minDisplay = reduced ? 400 : HOLD_END * 1000 * S;
    const start = Date.now();
    let hideT;
    let goneT;
    const hide = () => {
      setHiding(true);
      goneT = setTimeout(() => setGone(true), 700 * S);
    };
    const onLoad = () => {
      const wait = Math.max(0, minDisplay - (Date.now() - start));
      hideT = setTimeout(hide, wait);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad, { once: true });
    const cap = setTimeout(hide, (HOLD_END + 2600 / S) * 1000 * S);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(hideT);
      clearTimeout(goneT);
      clearTimeout(cap);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`hsn-loader fixed inset-0 z-[100] grid place-items-center bg-beige-50 ${
        hiding ? "pointer-events-none -translate-y-full" : ""
      }`}
    >
      <style>{`
        .hsn-loader { transition: transform ${0.65 * S}s cubic-bezier(0.76, 0, 0.24, 1); }
        .hsn-inner { transition: opacity ${0.4 * S}s ease, transform ${0.65 * S}s cubic-bezier(0.76, 0, 0.24, 1); }
        .hsn-inner.hsn-out { opacity: 0; transform: scale(0.94); }
        @keyframes hsn-ring { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        @keyframes hsn-bloom { 0% { opacity: 0; transform: scale(0.6); } 60% { opacity: 1; transform: scale(1.07); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes hsn-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @keyframes hsn-letter { from { opacity: 0; transform: translateY(10px) scale(0.85); } 60% { opacity: 1; } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: reduce) {
          .hsn-loader * { animation-duration: 0.01s !important; animation-delay: 0s !important; }
        }
      `}</style>
      <div className={`hsn-inner flex flex-col items-center gap-4 px-6 text-center ${hiding ? "hsn-out" : ""}`}>
        <div className="relative grid h-[190px] w-[240px] place-items-center">
          <svg viewBox="0 0 240 190" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <ellipse
              cx="120" cy="95" rx="112" ry="82"
              fill="none" stroke="#2f6340" strokeWidth="2.5" pathLength="100"
              style={{ strokeDasharray: 100, strokeDashoffset: 100, animation: `hsn-ring ${1.2 * S}s ${0.1 * S}s ease-in-out forwards` }}
            />
          </svg>
          <Image
            src={nurseryLogoTransparent}
            alt="Harsha Sai Nursery"
            width={200}
            height={130}
            priority
            className="h-24 w-auto object-contain"
            style={{ opacity: 0, animation: `hsn-bloom ${0.8 * S}s ${1 * S}s ease-out forwards` }}
          />
        </div>
        <p className="font-display text-2xl font-semibold text-green-900 md:text-3xl" aria-label={NAME}>
          {NAME.split("").map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="inline-block"
              style={{ opacity: 0, animation: `hsn-letter ${LETTER_DUR * S}s ${(LETTER_START + i * LETTER_STAGGER) * S}s ease-out forwards` }}
            >
              {ch === " " ? "\u00A0" : ch}
            </span>
          ))}
        </p>
        <p
          className="text-sm font-bold tracking-[0.3em] text-green-600 uppercase"
          style={{ opacity: 0, animation: `hsn-rise ${0.7 * S}s ${STRAP_AT * S}s ease-out forwards` }}
        >
          with Landscaping
        </p>
      </div>
    </div>
  );
}
