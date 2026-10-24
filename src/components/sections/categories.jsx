"use client";

import Image from "next/image";
import { ArrowRight, Sprout } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/react-bits/count-up";
import { HoverIcon } from "@/components/hover-icon";
import { CATEGORIES } from "@/lib/site";

export function Categories() {
  return (
    <section id="categories" className="bg-beige-100 py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge={<><Sprout className="size-4" /> Our Collections</>}
          title="What We Grow"
          desc="Explore our carefully curated categories of premium nursery plants"
        />
        <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08} from="scale">
              <a
                href="#plants"
                className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-soft"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/85 via-green-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-base font-bold">{c.name}</h3>
                  <p className="text-sm text-white/80">
                    {c.count ? <><CountUp to={c.count} suffix="+" /> {c.note}</> : c.note}
                  </p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-green-300">
                    Explore <HoverIcon icon={ArrowRight} variant="nudge" className="size-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
