"use client";

import Image from "next/image";
import { ArrowUpRight, Sprout } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Reveal } from "@/components/reveal";
import { CountUp } from "@/components/react-bits/count-up";
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
      </div>
      {/* Phones: swipe rail. Desktop: one wide tile + three small ones. */}
      <div className="rail flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:mx-auto md:grid md:max-w-7xl md:snap-none md:grid-cols-4 md:grid-rows-2 md:gap-4 md:overflow-visible md:px-8">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06} from="up" className={i === 0 ? "w-[78%] shrink-0 snap-start md:col-span-2 md:row-span-2 md:w-auto" : "w-[62%] shrink-0 snap-start md:w-auto"}>
            <a href="#plants" className="group relative block h-full min-h-72 overflow-hidden rounded-[28px] md:min-h-0">
              <div className={i === 0 ? "relative aspect-[4/5] md:aspect-auto md:h-full md:min-h-[32rem]" : "relative aspect-[4/5] md:aspect-[4/3]"}>
                <Image src={c.image} alt={c.name} fill sizes="(min-width: 768px) 40vw, 78vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-green-950/85 to-transparent p-4 pt-16 text-white md:p-5">
                <div>
                  <h3 className="text-base">{c.name}</h3>
                  <p className="text-sm text-white/80">
                    {c.count ? <><CountUp to={c.count} suffix="+" /> {c.note}</> : c.note}
                  </p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-lime text-green-950 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
