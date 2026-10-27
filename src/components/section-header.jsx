import { Reveal } from "@/components/reveal";

export function SectionHeader({ badge, title, desc, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto mb-8 max-w-2xl text-center md:mb-12" : "mb-8 max-w-2xl md:mb-12"}>
      <span className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-green-600 uppercase">
        {badge}
      </span>
      <h2 className="text-lg text-ink">{title}</h2>
      {desc && <p className="mt-3 text-base text-ink/65">{desc}</p>}
    </Reveal>
  );
}
