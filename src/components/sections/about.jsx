"use client";

import Image from "next/image";
import { ArrowRight, Award, Globe, Leaf, Package, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { HoverIcon } from "@/components/hover-icon";
import { useLenis } from "@/components/providers";

const HIGHLIGHTS = [
  { icon: Award, text: "Trusted Nursery — Years of Excellence" },
  { icon: Leaf, text: "Specialization in Premium Fruit Plants" },
  { icon: Globe, text: "Imported Varieties — Thailand, Japan, Vietnam" },
  { icon: Package, text: "Bulk Orders & Wholesale Available" },
];

export function About() {
  const lenis = useLenis();
  const toContact = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo("#contact", { offset: -72 });
    else document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="bg-beige-50 py-14 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:gap-12 md:px-8 lg:grid-cols-2">
        <Reveal from="left" className="relative">
          <div className="absolute -right-3 -bottom-3 size-full rounded-3xl bg-green-200 md:-right-5 md:-bottom-5" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lift">
            <Image src="/assets/about.webp" alt="Harsha Sai Nursery plants" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </Reveal>

        <Reveal from="right">
          <span className="mb-4 inline-flex items-center gap-2 border-b-2 border-amber-400 pb-1 text-sm font-bold tracking-widest text-green-800 uppercase">
            <Sprout className="size-4" /> About Us
          </span>
          <h2 className="text-lg font-bold">Harsha Sai Nursery</h2>
          <p className="mt-4 text-base text-ink/75">
            We are a trusted, premium-quality plant nursery located in the heart of Burrilanka, Andhra Pradesh. With years of dedication, we have cultivated an exceptional collection of fruit plants, specializing in imported and exotic varieties.
          </p>
          <p className="mt-3 text-base text-ink/75">
            Our nursery is known for bringing rare and high-yield plant varieties from countries like Thailand, Japan, Vietnam, Brazil, and beyond — giving our customers access to the finest plants available.
          </p>
          <ul className="mt-6 grid gap-3 min-[480px]:grid-cols-2">
            {HIGHLIGHTS.map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-3 rounded-2xl bg-white p-4 text-sm shadow-soft">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-green-100 text-green-700">
                  <HoverIcon icon={icon} variant="bounce" className="size-4" />
                </span>
                <span className="font-bold">{text}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="mt-6">
            <a href="#contact" onClick={toContact}>
              Learn More <HoverIcon icon={ArrowRight} variant="nudge" className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
