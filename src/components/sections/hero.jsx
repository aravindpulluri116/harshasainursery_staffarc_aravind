"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Phone, Leaf } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { HoverIcon } from "@/components/hover-icon";
import { useLenis } from "@/components/providers";
import { PHONE, waLink } from "@/lib/site";
import { plants } from "@/data/plants";

const FACTS = [
  [`${plants.length}+`, "fruit plant varieties"],
  ["Wholesale", "prices on every plant"],
  ["Bulk", "orders available"],
];

export function Hero() {
  const lenis = useLenis();
  const toPlants = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo("#plants", { offset: -72 });
    else document.querySelector("#plants")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-beige-50 pt-24 pb-10 md:pt-32 md:pb-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-green-600 uppercase"
          >
            <Leaf className="size-4" /> Ramayampet, Medak, Telangana
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, type: "spring", stiffness: 90, damping: 18 }}
            className="text-[clamp(2.75rem,1.4rem+6vw,5.5rem)] leading-[0.98] text-ink"
          >
            Premium Quality <span className="italic text-green-600">Nursery Plants</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="mt-5 max-w-lg text-base text-ink/70 md:text-[1.125rem]"
          >
            Coconut, mango, jackfruit, sapota, guava, custard apple &amp; lemon plants at wholesale prices
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.26 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="bg-green-900 text-white hover:bg-green-800">
              <a href="#plants" onClick={toPlants}>Explore Plants</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${PHONE}`}>
                <HoverIcon icon={Phone} variant="wiggle" className="size-4" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href={waLink()} target="_blank" rel="noreferrer">
                <HoverIcon icon={WhatsAppIcon} variant="wiggle" className="size-4" /> WhatsApp
              </a>
            </Button>
          </motion.div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/15 pt-6">
            {FACTS.map(([n, label]) => (
              <div key={n}>
                <dt className="font-display text-[1.5rem] leading-none font-semibold text-ink md:text-4xl">{n}</dt>
                <dd className="mt-2 text-sm leading-snug text-ink/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo mosaic: tall arch + two stacked tiles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 70, damping: 16 }}
          className="grid grid-cols-[1.2fr_1fr] gap-3 md:gap-4"
        >
          <div className="relative row-span-2 aspect-[3/5] overflow-hidden rounded-t-[999px] rounded-b-3xl bg-green-100">
            <Image src="/assets/hero-bg.webp" alt="Harsha Sai Nursery grounds" fill priority sizes="(min-width: 1024px) 30vw, 55vw" className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl bg-green-100">
            <Image src="/assets/fruit.webp" alt="Fruit plants" fill priority sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-green-950">
            <Image src="/assets/about.webp" alt="Mango orchard at Harsha Sai Nursery" fill sizes="(min-width: 1024px) 22vw, 40vw" className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
