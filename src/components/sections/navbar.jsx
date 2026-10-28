"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import ShoppingCartIcon from "@/components/ui/shopping-cart-icon";
import WhatsappIcon from "@/components/ui/whatsapp-icon";
import TelephoneIcon from "@/components/ui/telephone-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLenis } from "@/components/providers";
import { useCart } from "@/lib/cart";
import { NAV_LINKS, PHONE, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const lenis = useLenis();
  const { count } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  // Slide away on scroll down, spring back on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 60);
    setHidden(y > prev && y > 200);
  });

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Lock scroll while the drawer is open
  useEffect(() => {
    if (!lenis) return;
    open ? lenis.stop() : lenis.start();
  }, [open, lenis]);

  const go = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (lenis) lenis.scrollTo(href, { offset: -72 });
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: hidden && !open ? -100 : 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        "bg-beige-50/90 backdrop-blur-md", scrolled || open ? "border-b border-ink/10" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-[72px] md:px-8">
        <motion.a
          href="#home"
          onClick={(e) => go(e, "#home")}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          <Image src="/assets/nursery-logo.svg" alt="Harsha Sai Nursery" width={200} height={110} className="h-12 w-auto shrink-0 object-contain md:h-14" />
        </motion.a>

        {/* Large: inline nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-bold transition-colors",
                active === l.href ? "text-ink" : "text-ink/60 hover:text-ink",
              )}
            >
              {/* One pill that springs between links as the active section changes */}
              {active === l.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-x-4 bottom-1 h-0.5 rounded-full bg-green-600"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Cart button → /cart page */}
          <motion.div
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="relative"
          >
            <Link
              href="/cart"
              aria-label={`View cart — ${count} item${count !== 1 ? "s" : ""}`}
              className={cn(
                "relative grid size-10 place-items-center rounded-full transition-colors",
                scrolled || open ? "text-green-900 hover:bg-green-100" : "text-white hover:bg-white/15",
              )}
            >
              <ShoppingCartIcon size={20} />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    className="absolute -top-0.5 -right-0.5 grid size-5 place-items-center rounded-full bg-green-700 text-[10px] font-bold text-white"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          <Button asChild variant="whatsapp" className="hidden md:inline-flex">
            <a href={waLink()} target="_blank" rel="noreferrer">
              <WhatsappIcon size={16} /> WhatsApp
            </a>
          </Button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={cn(
              "grid size-10 place-items-center rounded-full transition-colors lg:hidden",
              "text-ink hover:bg-ink/10",
            )}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-flex"
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Small + medium: drawer that animates display:none -> flex via @starting-style */}
      <div className="menu-scrim fixed inset-0 top-16 h-[calc(100dvh-4rem)] md:h-[calc(100dvh-4.5rem)] -z-10 bg-black/40 lg:hidden" data-open={open} onClick={() => setOpen(false)} />
      <nav
        data-open={open}
        aria-label="Mobile"
        className="menu-panel fixed top-16 right-0 bottom-0 h-[calc(100dvh-4rem)] overflow-y-auto md:h-[calc(100dvh-4.5rem)] w-[min(20rem,85vw)] flex-col gap-1 bg-beige-50 p-4 shadow-lift md:top-[72px] lg:hidden"
      >
        {NAV_LINKS.map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            onClick={(e) => go(e, l.href)}
            animate={open ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 20, delay: open ? 0.08 + i * 0.06 : 0 }}
            className={cn(
              "rounded-xl px-4 py-3 text-base font-bold transition-colors",
              active === l.href ? "bg-green-100 text-green-900" : "text-ink hover:bg-green-50",
            )}
          >
            {l.label}
          </motion.a>
        ))}
        <Button asChild variant="whatsapp" size="lg" className="mt-3 md:hidden">
          <a href={waLink()} target="_blank" rel="noreferrer">
            <WhatsappIcon size={18} /> WhatsApp
          </a>
        </Button>
      </nav>
    </motion.header>
    {/* Phones: always-visible call / WhatsApp bar */}
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-ink/10 bg-beige-50/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
      <Button asChild variant="outline">
        <a href={`tel:${PHONE}`}><TelephoneIcon size={16} /> Call</a>
      </Button>
      <Button asChild variant="whatsapp">
        <a href={waLink()} target="_blank" rel="noreferrer"><WhatsappIcon size={16} /> WhatsApp</a>
      </Button>
    </div>

    </>
  );
}
