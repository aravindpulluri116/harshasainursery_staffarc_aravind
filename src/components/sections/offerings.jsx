import { Apple, Cherry, Trees, TreePine, Flower2, Shovel, Sprout } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";

const OFFERINGS = [
  { label: "Indian Fruit Plants", icon: Apple },
  { label: "Exotic Fruit Plants", icon: Cherry },
  { label: "Landscaping", icon: Trees },
  { label: "Avenue Plants", icon: TreePine },
  { label: "Indoor & Flower Plants", icon: Flower2 },
  { label: "Gardening Plants", icon: Shovel },
  { label: "Vegetable & Flower Saplings", icon: Sprout },
];

export function Offerings() {
  return (
    <section id="offerings" className="bg-beige-100">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <SectionHeader badge="What We Offer" title="Everything for your garden" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {OFFERINGS.map(({ label, icon: Icon }, i) => (
            <Reveal
              key={label}
              delay={(i % 4) * 0.05}
              className="flex flex-col items-start gap-4 rounded-[22px] bg-white p-5 shadow-soft last:col-span-2 sm:last:col-span-1"
            >
              <span className="grid size-12 place-items-center rounded-full bg-green-100 text-green-900">
                <Icon className="size-6" />
              </span>
              <p className="text-base font-bold text-ink">{label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
