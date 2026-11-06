import { Apple, Cherry, Trees, TreePine, Flower2, Shovel, Sprout, BadgeCheck, ShieldCheck, Users, Truck, IndianRupee } from "lucide-react";
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

const PROMISES = [
  { label: "100% Genuine Grafted Plants", desc: "1, 2 and 3-year plants available", icon: BadgeCheck },
  { label: "Growth Guarantee", desc: "On both seeds and grafted plants", icon: ShieldCheck },
  { label: "Farmer Guidance & Support", desc: "Guidance for crop production", icon: Users },
  { label: "Transport & Delivery", desc: "RTC cargo delivery, vehicles arranged for bulk orders", icon: Truck },
  { label: "₹5,000 Minimum Order", desc: "Wholesale and bulk plant orders", icon: IndianRupee },
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

        <div className="mt-14 md:mt-20">
          <SectionHeader badge="Why Choose Us" title="The Harsha Sai promise" />
          <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {PROMISES.map(({ label, desc, icon: Icon }, i) => (
              <Reveal
                key={label}
                delay={(i % 3) * 0.05}
                className="flex items-start gap-4 rounded-[22px] bg-white p-5 shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-green-100 text-green-900">
                  <Icon className="size-6" />
                </span>
                <span>
                  <p className="text-base font-bold text-ink">{label}</p>
                  <p className="mt-1 text-sm text-ink/60">{desc}</p>
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
