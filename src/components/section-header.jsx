import { Reveal } from "@/components/reveal";

export function SectionHeader({ badge, title, desc }) {
  return (
    <Reveal className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-800">
        {badge}
      </span>
      <h2 className="text-lg font-bold text-ink">{title}</h2>
      {desc && <p className="mt-3 text-base text-ink/70">{desc}</p>}
    </Reveal>
  );
}
