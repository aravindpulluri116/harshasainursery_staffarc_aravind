"use client";

import Image from "next/image";
import { ArrowRight, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HoverIcon } from "@/components/hover-icon";
import { useLenis } from "@/components/providers";

const HIGHLIGHTS = [
  "Trusted Nursery — Years of Excellence",
  "Specialization in Premium Fruit Plants",
  "Imported Varieties — Thailand, Japan, Vietnam",
  "Bulk Orders & Wholesale Available",
];

export function About() {
  const lenis = useLenis();
  const toContact = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo("#contact", { offset: -72 });
    else document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-green-950 py-14 text-white md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal from="up" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] md:aspect-[4/3] lg:aspect-[4/5]">
            <Image src="/assets/about.webp" alt="Harsha Sai Nursery plants" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </div>
        </Reveal>

        <Reveal from="up">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-lime uppercase">
            <Sprout className="size-4" /> About Us
          </span>
          <h2 className="text-lg">Harsha Sai Nursery</h2>
          <p className="mt-5 text-base text-white/75">
            We are a trusted, premium-quality plant nursery located in Laxmapoor village, Ramayampet Mandal, Medak District, Telangana. With years of dedication, we have cultivated an exceptional collection of fruit plants, specializing in imported and exotic varieties.
          </p>
          <p className="mt-3 text-base text-white/75">
            Our nursery is known for bringing rare and high-yield plant varieties from countries like Thailand, Japan, Vietnam, Brazil, and beyond — giving our customers access to the finest plants available.
          </p>
          <ol className="mt-7 divide-y divide-white/15 border-y border-white/15">
            {HIGHLIGHTS.map((text, i) => (
              <li key={text} className="flex items-baseline gap-4 py-3.5">
                <span className="font-display text-sm text-lime">0{i + 1}</span>
                <span className="text-base font-bold">{text}</span>
              </li>
            ))}
          </ol>
          <Button asChild size="lg" className="mt-7">
            <a href="#contact" onClick={toContact}>
              Learn More <HoverIcon icon={ArrowRight} variant="nudge" className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
