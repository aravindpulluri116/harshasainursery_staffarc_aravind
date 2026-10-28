"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Minus, Plus, ShoppingBasket, Trash2, X } from "lucide-react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import { PlantImage } from "@/components/plant-image";
import { cn } from "@/lib/utils";

export function CartDrawer({ open, onClose, onCheckout }) {
  const { items, inc, dec, remove, count } = useCart();

  return (
    <>
      {/* Scrim */}
      <div
        className="menu-scrim fixed inset-0 z-[80] bg-black/40"
        data-open={open}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="menu-panel fixed top-0 right-0 bottom-0 z-[90] w-full max-w-sm flex-col bg-white shadow-lift"
        data-open={open}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-green-100 px-5 py-4">
          <h2 className="flex items-center gap-2 text-base font-bold text-green-900">
            <ShoppingBasket className="size-5" /> Cart
            {count > 0 && (
              <span className="ml-1 rounded-full bg-green-700 px-2 py-0.5 text-sm text-white">
                {count}
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="grid size-9 place-items-center rounded-full text-ink/60 hover:bg-green-50"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="py-16 text-center text-ink/50">
              <ShoppingBasket className="mx-auto mb-3 size-10 opacity-40" />
              <p className="text-base">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="grid gap-4">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="flex gap-3 rounded-2xl bg-green-50 p-3"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-green-100">
                      <PlantImage plant={item} className="object-cover" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{item.name}</p>
                      <p className="text-sm text-ink/60">{item.type}</p>
                      {item.wholesale && (
                        <p className="text-sm font-bold text-green-700">₹{item.wholesale}/-</p>
                      )}
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => dec(item.id)}
                          aria-label="Decrease"
                          className="grid size-7 place-items-center rounded-full bg-white text-ink shadow-soft hover:bg-green-100"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="min-w-[1.5rem] text-center text-sm font-bold">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => inc(item.id)}
                          aria-label="Increase"
                          className="grid size-7 place-items-center rounded-full bg-white text-ink shadow-soft hover:bg-green-100"
                        >
                          <Plus className="size-3.5" />
                        </button>
                        <button
                          onClick={() => remove(item.id)}
                          aria-label="Remove"
                          className="ml-auto grid size-7 place-items-center rounded-full text-red-400 hover:bg-red-50"
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-green-100 px-5 py-4">
            <Button
              onClick={() => { onClose(); onCheckout(); }}
              variant="whatsapp"
              size="lg"
              className="w-full"
            >
              Proceed to Order via WhatsApp
            </Button>
          </div>
        )}
      </div>
    </>
  );
}
