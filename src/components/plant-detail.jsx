"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ShoppingBasket, Sprout } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PlantImage } from "@/components/plant-image";
import { plants } from "@/data/plants";
import { TAGS } from "@/lib/site";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const TAG_STYLE = {
  imported: "bg-white text-ink",
  exotic: "bg-lime text-green-950",
  bestseller: "bg-green-900 text-white",
};

export function PlantDetail({ plant }) {
  const { add } = useCart();
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const [pulse, setPulse] = useState(0);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  if (!plant) {
    return (
      <>
        <Navbar />
        <main className="min-h-[80dvh] bg-beige-50 pt-24 pb-20 md:pt-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-24 text-center md:px-8">
            <Sprout className="size-16 text-green-200" />
            <h1 className="text-lg font-bold">Plant not found.</h1>
            <Button asChild size="lg">
              <Link href="/#plants">Browse Plants</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const idx = plants.findIndex((p) => p.id === plant.id);
  const prev = plants[(idx - 1 + plants.length) % plants.length];
  const next = plants[(idx + 1) % plants.length];

  const addToCart = () => {
    add({ id: plant.id, name: plant.name, image: plant.image, type: plant.group, wholesale: plant.wholesale ?? null });
    setAdded(true);
    setPulse((n) => n + 1);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setAdded(false), 1800);
    toast.success(`${plant.name} added to cart — view cart to order`, {
      action: { label: "View Cart", onClick: () => router.push("/cart") },
    });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-[80dvh] bg-beige-50 pt-24 pb-20 md:pt-28">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Link href="/#plants" aria-label="Back to plants" className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:bg-green-50">
              <ArrowLeft className="size-5" />
            </Link>
            <h1 className="truncate text-lg font-bold">{plant.name}</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-green-100"
            >
              {plant.tag && (
                <span className={cn("absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-sm font-bold shadow-soft", TAG_STYLE[plant.tag])}>
                  {TAGS[plant.tag]}
                </span>
              )}
              {plant.representative && (
                <span className="absolute top-3 right-3 z-10 rounded-full bg-black/55 px-2.5 py-1 text-xs font-bold text-white">
                  Representative image
                </span>
              )}
              <PlantImage plant={plant} priority sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="flex flex-col gap-4"
            >
              <div>
                <h2 className="text-lg font-bold text-green-900">{plant.name}</h2>
                <p className="text-sm text-ink/60">{plant.group}</p>
              </div>
              <dl className="divide-y divide-green-100 rounded-2xl bg-white px-4 text-sm shadow-soft">
                {[["Group", plant.group], ...(plant.wholesale ? [["Price", `₹${plant.wholesale}/-`]] : [])].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3">
                    <dt className="text-ink/60">{k}</dt>
                    <dd className="text-right font-bold">{v}</dd>
                  </div>
                ))}
              </dl>
              {plant.desc && <p className="text-base text-ink/75">{plant.desc}</p>}
              <div className="mt-auto grid gap-2 pt-2">
                <motion.div key={pulse} initial={{ scale: 1 }} animate={pulse ? { scale: [1, 1.06, 0.97, 1] } : { scale: 1 }} transition={{ duration: 0.45 }}>
                  <Button onClick={addToCart} size="lg" className={cn("w-full overflow-hidden transition-colors duration-300", added && "bg-green-700 text-white hover:bg-green-700")}>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={added ? "added" : "idle"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.18 }}
                        className="inline-flex items-center gap-2"
                      >
                        {added ? <Check className="size-4" /> : <ShoppingBasket className="size-4" />}
                        {added ? "Added to Cart" : "Add to Cart"}
                      </motion.span>
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Prev / next */}
          <div className="mt-10 flex items-center justify-between gap-3">
            <Link href={`/plants/${prev.id}`} className="flex min-w-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft transition hover:bg-green-50">
              <ArrowLeft className="size-4 shrink-0" />
              <span className="truncate">{prev.name}</span>
            </Link>
            <Link href={`/plants/${next.id}`} className="flex min-w-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft transition hover:bg-green-50">
              <span className="truncate">{next.name}</span>
              <ArrowRight className="size-4 shrink-0" />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
