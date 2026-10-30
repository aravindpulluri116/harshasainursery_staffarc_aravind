"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { SplitText } from "@/components/react-bits/split-text";
import { PlantImage } from "@/components/plant-image";
import { plants } from "@/data/plants";
import { TAGS } from "@/lib/site";
import { cn } from "@/lib/utils";

const TAG_STYLE = {
  imported: "bg-white text-ink",
  exotic: "bg-lime text-green-950",
  bestseller: "bg-green-900 text-white",
};

// A few plants for the homepage, using the tags already in the catalogue data.
const featured = [...plants]
  .sort((a, b) => (b.tag === "bestseller") - (a.tag === "bestseller") || a.name.localeCompare(b.name))
  .slice(0, 6);

export function FeaturedPlants() {
  const router = useRouter();

  return (
    <section id="plants" className="bg-beige-50">
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-2 md:px-8 md:pt-20">
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-green-600 uppercase">
          <Sprout className="size-4" /> Featured
        </span>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-lg">
            <SplitText text="Featured Plants" />
          </h2>
          <p className="max-w-sm text-base text-ink/65">{`A few varieties to start with - the full catalogue has all ${plants.length} plants.`}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 md:px-8 md:pb-20">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {featured.map((p) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => router.push(`/plants/${p.id}`)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 140, damping: 16 }}
              className="group relative overflow-hidden rounded-[22px] bg-green-100 text-left [content-visibility:auto]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {p.tag && (
                  <span className={cn("absolute top-2 left-2 z-10 rounded-full px-3 py-1 text-sm font-bold shadow-soft", TAG_STYLE[p.tag])}>
                    {TAGS[p.tag]}
                  </span>
                )}
                {p.representative && (
                  <span className="absolute top-2 right-2 z-10 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-bold text-white">
                    Representative image
                  </span>
                )}
                <PlantImage plant={p} loading="lazy" sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950/90 via-green-950/55 to-transparent p-3 pt-14 text-white md:p-4 md:pt-16">
                  <h3 className="truncate text-base">{p.name}</h3>
                  <p className="truncate text-sm text-white/75">{p.group}</p>
                  {p.wholesale && <p className="text-sm font-bold text-lime">₹{p.wholesale}/-</p>}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" variant="outlineDark">
            <Link href="/plants">
              View all {plants.length} plants <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
