"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SectionHeader } from "@/components/section-header";
import { plants } from "@/data/plants";
const items = plants.filter((p) => p.image).slice(0, 12);

export function Gallery() {
  const [index, setIndex] = useState(null);
  const touchX = useRef(0);
  const item = index === null ? null : items[index];
  const step = (d) => setIndex((i) => (i + d + items.length) % items.length);

  if (items.length === 0) return null;

  return (
    <section id="gallery" className="bg-beige-100 py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge={<><Camera className="size-4" /> Gallery</>}
          title="Our Nursery Showcase"
          desc="A glimpse into our beautiful plant collections"
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {items.map((p, i) => (
            <motion.button
              key={p.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`View ${p.name}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 140, damping: 16, delay: (i % 4) * 0.06 }}
              className="relative aspect-square overflow-hidden rounded-2xl shadow-soft"
            >
              <Image src={p.image} alt={p.name} fill loading="lazy" sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="object-cover" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!item} onOpenChange={(o) => !o && setIndex(null)}>
        {item && (
          <DialogContent
            className="max-w-3xl overflow-hidden bg-black p-0"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              const d = touchX.current - e.changedTouches[0].clientX;
              if (Math.abs(d) > 50) step(d > 0 ? 1 : -1);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") step(-1);
              if (e.key === "ArrowRight") step(1);
            }}
          >
            <div className="relative aspect-square max-h-[80dvh] w-full">
              <Image key={item.id} src={item.image} alt={item.name} fill sizes="(min-width: 768px) 768px, 100vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-3 bg-black px-4 py-3 text-white">
              <DialogTitle className="text-base font-bold">{item.name}</DialogTitle>
              <DialogDescription className="text-sm text-white/70">{index + 1} / {items.length}</DialogDescription>
            </div>
            <button onClick={() => step(-1)} aria-label="Previous image" className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 hover:bg-white">
              <ChevronLeft className="size-5" />
            </button>
            <button onClick={() => step(1)} aria-label="Next image" className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 hover:bg-white">
              <ChevronRight className="size-5" />
            </button>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
