import { Reveal } from "@/components/reveal";

export function SectionHeader({ badge, title, desc }) {
  return (
    <Reveal className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <span className="mb-4 inline-flex items-center gap-2 border-b-2 border-amber-400 pb-1 text-sm font-bold tracking-widest text-green-800 uppercase">
        {badge}
      </span>
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      {desc && <p className="mt-3 text-base text-ink/70">{desc}</p>}
    </Reveal>
  );
}
