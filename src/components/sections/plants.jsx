"use client";

import { useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBasket, Sprout } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SplitText } from "@/components/react-bits/split-text";
import { PlantImage } from "@/components/plant-image";
import { HoverIcon } from "@/components/hover-icon";
import { plants } from "@/data/plants";
import { FILTERS, TAGS, waLink } from "@/lib/site";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
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
  const { add } = useCart();
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const addToCart = useCallback((p) => {
    add({ id: p.id, name: p.name, image: p.image, type: p.group, wholesale: p.wholesale ?? null });
    toast.success(`${p.name} added to cart — view cart to order`, {
      action: { label: "View Cart", onClick: () => router.push("/cart") },
    });
  }, [add, router]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = plants.filter((p) => (filter === "all" || p.group === filter) && (!q || p.name.toLowerCase().includes(q) || p.group.toLowerCase().includes(q)));
    if (filter === "all") out = [...out].sort((a, b) => a.name.localeCompare(b.name));
    return out;
  }, [filter, query]);


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
          <p className="max-w-sm text-base text-ink/65">{`${plants.length} varieties, real plants, real wholesale prices`}</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 md:px-8 md:pb-20">
        <div className="-mx-4 mb-5 flex flex-col gap-3 border-b border-ink/10 bg-beige-50/95 px-4 py-3 backdrop-blur md:-mx-8 md:mb-8 md:flex-row md:items-center md:justify-between md:px-8">
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
            {plants.length === 0 ? (
              <>
                <h3 className="text-base font-bold">New catalogue coming soon.</h3>
                <p className="text-base text-ink/60">We&apos;re adding our real plant varieties.</p>
              </>
            ) : (
              <>
                <h3 className="text-base font-bold">No plants found.</h3>
                <p className="text-base text-ink/60">Try another plant name.</p>
              </>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {list.map((p, i) => (
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
                  {p.tag && <PlantTag tag={p.tag} />}
                  {p.representative && (
                    <span className="absolute top-2 right-2 z-10 rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-bold text-white">
                      Representative image
                    </span>
                  )}
                  <PlantImage plant={p} loading="lazy" sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-950/90 via-green-950/55 to-transparent p-3 pt-14 text-white md:p-4 md:pt-16">
                    <h3 className="truncate text-base">{p.name}</h3>
                    <p className="truncate text-sm text-white/75">{p.group}</p>
                    {p.wholesale && <p className="text-sm font-bold text-lime">₹{p.wholesale}/-</p>}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </div>

    </section>
  );
}
