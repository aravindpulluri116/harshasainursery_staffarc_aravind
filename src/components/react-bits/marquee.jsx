import { cn } from "@/lib/utils";

// Seamless looping marquee: children are rendered twice and the track slides -50%.
export function Marquee({ children, className }) {
  return (
    <div className={cn("group overflow-hidden", className)}>
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused] md:gap-6">
        {children}
        <div className="contents" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
