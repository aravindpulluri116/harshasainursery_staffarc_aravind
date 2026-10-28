"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Minus, Plus, ShoppingBasket, Trash2 } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { PlantImage } from "@/components/plant-image";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, inc, dec, remove, clear } = useCart();

  const subtotal = items
    .filter((i) => i.wholesale)
    .reduce((s, i) => s + i.wholesale * i.qty, 0);

  return (
    <>
      <Navbar />
      <main className="min-h-[80dvh] bg-beige-50 pt-24 pb-20 md:pt-28">
        <div className="mx-auto max-w-4xl px-4 md:px-8">

          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <Link href="/#plants" className="grid size-10 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:bg-green-50">
              <ArrowLeft className="size-5" />
            </Link>
            <h1 className="text-lg font-bold">Your Cart</h1>
          </div>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center gap-4 py-24 text-center"
            >
              <ShoppingBasket className="size-16 text-green-200" />
              <p className="text-base font-bold text-ink/60">Your cart is empty.</p>
              <Button asChild size="lg">
                <Link href="/#plants">Browse Plants</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_320px]">

              {/* Items list */}
              <div className="grid gap-4">
                <AnimatePresence initial={false}>
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 30, height: 0 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className="flex gap-4 rounded-2xl bg-white p-4 shadow-soft"
                    >
                      <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-green-50 md:size-24">
                        <PlantImage plant={item} className="object-cover" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-base font-bold">{item.name}</h3>
                        <p className="text-sm text-ink/60">{item.type}</p>
                        {item.wholesale && (
                          <p className="mt-0.5 text-sm font-bold text-green-700">
                            ₹{item.wholesale}/- per plant
                          </p>
                        )}

                        <div className="mt-3 flex items-center justify-between gap-3">
                          {/* Qty controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => dec(item.id)}
                              aria-label="Remove one"
                              className="grid size-8 place-items-center rounded-full border border-green-200 bg-white text-ink hover:bg-green-50"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="min-w-[2rem] text-center text-base font-bold">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => inc(item.id)}
                              aria-label="Add one"
                              className="grid size-8 place-items-center rounded-full border border-green-200 bg-white text-ink hover:bg-green-50"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>

                          {/* Line total */}
                          <div className="flex items-center gap-3">
                            {item.wholesale && (
                              <span className="text-base font-bold text-green-800">
                                ₹{item.wholesale * item.qty}/-
                              </span>
                            )}
                            <button
                              onClick={() => remove(item.id)}
                              aria-label="Remove item"
                              className="grid size-8 place-items-center rounded-full text-red-400 hover:bg-red-50"
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button
                  onClick={clear}
                  className="self-start text-sm text-red-400 underline underline-offset-2 hover:text-red-600"
                >
                  Clear cart
                </button>
              </div>

              {/* Order summary */}
              <div className="h-fit rounded-2xl bg-white p-5 shadow-soft md:p-6">
                <h2 className="text-base font-bold text-green-900">Order Summary</h2>

                <ul className="mt-4 divide-y divide-green-100 text-sm">
                  {items.map((i) => (
                    <li key={i.id} className="flex justify-between gap-2 py-2.5">
                      <span className="truncate">{i.name} <span className="text-ink/50">×{i.qty}</span></span>
                      <span className="shrink-0 font-bold">
                        {i.wholesale ? `₹${i.wholesale * i.qty}/-` : "—"}
                      </span>
                    </li>
                  ))}
                </ul>

                {subtotal > 0 && (
                  <div className="mt-3 flex justify-between border-t border-green-200 pt-3 text-base font-bold text-green-800">
                    <span>Approx Total</span>
                    <span>₹{subtotal}/-</span>
                  </div>
                )}

                <p className="mt-3 text-sm text-ink/60">
                  Final price confirmed on WhatsApp after order.
                </p>

                <Button asChild size="lg" variant="whatsapp" className="mt-5 w-full">
                  <Link href="/checkout">Proceed to Checkout →</Link>
                </Button>
                <Button asChild size="lg" variant="ghost" className="mt-2 w-full text-green-800">
                  <Link href="/#plants">← Continue Shopping</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
