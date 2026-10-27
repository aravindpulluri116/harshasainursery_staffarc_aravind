"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Search, Sprout } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SplitText } from "@/components/react-bits/split-text";
import { PlantImage } from "@/components/plant-image";
import { HoverIcon } from "@/components/hover-icon";
import { plants } from "@/data/plants";
import { FILTERS, TAGS, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const TAG_STYLE = {
  imported: "bg-white text-ink",
  exotic: "bg-lime text-green-950",
  bestseller: "bg-green-900 text-white",
};

function PlantTag({ tag }) {
  return (
    <span className={cn("absolute top-2 left-2 z-10 rounded-full px-3 py-1 text-sm font-bold shadow-soft", TAG_STYLE[tag])}>
      {TAGS[tag]}
    </span>
  );
}

export function Plants() {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null); // index into `list`

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = plants.filter((p) => (filter === "all" || p.tag === filter) && (!q || p.name.toLowerCase().includes(q)));
    if (filter === "all") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [filter, query]);

  const plant = selected === null ? null : list[selected];
  const step = (d) => setSelected((i) => (i + d + list.length) % list.length);

  return (
    <section id="plants" className="bg-beige-50">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-2 md:px-8 md:pt-20">
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-green-600 uppercase">
          <Sprout className="size-4" /> Catalogue
        </span>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-lg">
            <SplitText text="Our Plant Collections" />
          </h2>
          <p className="max-w-sm text-base text-ink/65">203+ premium fruit plant varieties — hand-picked for quality</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 md:px-8 md:pb-20">
        <div className="sticky top-16 z-30 -mx-4 mb-5 flex flex-col gap-3 border-b border-ink/10 bg-beige-50/95 px-4 py-3 backdrop-blur md:top-[72px] md:-mx-8 md:mb-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div role="tablist" aria-label="Filter plants" className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                role="tab"
                aria-selected={filter === f.key}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "relative shrink-0 rounded-full px-5 py-2 text-sm font-bold transition-colors",
                  filter === f.key ? "text-white" : "bg-white text-ink/80 ring-1 ring-ink/10 hover:bg-green-50",
                )}
              >
                {filter === f.key && (
                  <motion.span layoutId="filter-pill" className="absolute inset-0 -z-0 rounded-full bg-green-900" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
          <div className="relative w-full md:max-w-xs">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-ink/50" />
            <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search plants…" aria-label="Search plants" className="pl-10" />
          </div>
        </div>

        {list.length === 0 ? (
          <div className="pop-in py-16 text-center">
            <Sprout className="mx-auto mb-3 size-12 text-green-600/50" />
            <h3 className="text-base font-bold">No plants found.</h3>
            <p className="text-base text-ink/60">Try another plant name.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {list.map((p, i) => (
              <motion.button
                key={p.id}
                type="button"
                onClick={() => setSelected(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 140, damping: 16 }}
                className="group relative overflow-hidden rounded-[22px] bg-green-100 text-left [content-visibility:auto]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {p.tag && <PlantTag tag={p.tag} />}
                  <PlantImage plant={p} loading="lazy" sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950/90 via-green-950/55 to-transparent p-3 pt-14 text-white md:p-4 md:pt-16">
                    <h3 className="truncate text-base">{p.name}</h3>
                    <p className="truncate text-sm text-white/75">{p.type} • {p.origin}</p>
                    {p.wholesale && <p className="text-sm font-bold text-lime">Wholesale ₹{p.wholesale}/-</p>}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!plant} onOpenChange={(o) => !o && setSelected(null)}>
        {plant && (
          <DialogContent className="max-w-4xl p-0 md:grid md:grid-cols-2">
            <div className="relative aspect-square md:aspect-auto md:min-h-[28rem]">
              <PlantImage plant={plant} sizes="(min-width: 768px) 450px, 100vw" className="object-cover" />
              <button onClick={() => step(-1)} aria-label="Previous plant" className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-soft transition-colors hover:bg-white">
                <ChevronLeft className="size-5" />
              </button>
              <button onClick={() => step(1)} aria-label="Next plant" className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-soft transition-colors hover:bg-white">
                <ChevronRight className="size-5" />
              </button>
            </div>
            <div className="flex flex-col gap-3 p-5 md:p-8">
              <DialogTitle asChild>
                <h3 key={plant.id} className="text-lg font-bold text-green-900">
                  <SplitText text={plant.name} stagger={0.03} />
                </h3>
              </DialogTitle>
              <DialogDescription className="text-sm text-ink/60">{plant.type} • {plant.origin}</DialogDescription>
              <dl className="divide-y divide-green-100 rounded-2xl bg-green-50 px-4 text-sm">
                {[["Category", "Fruit Plant"], ["Type", plant.type], ["Origin", plant.origin], ...(plant.wholesale ? [["Wholesale price", `₹${plant.wholesale}/-`]] : [])].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink/60">{k}</dt>
                    <dd className="text-right font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-base text-ink/75">{plant.desc}</p>
              <Button asChild variant="whatsapp" size="lg" className="mt-auto">
                <a href={waLink(`Hi Harsha Sai Nursery! I'm interested in ${plant.name}. Please share details.`)} target="_blank" rel="noreferrer">
                  <HoverIcon icon={MessageCircle} variant="wiggle" className="size-4" /> Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
