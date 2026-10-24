"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone, MessageCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlurText } from "@/components/react-bits/blur-text";
import { HoverIcon } from "@/components/hover-icon";
import { useLenis } from "@/components/providers";
import { PHONE, waLink } from "@/lib/site";

export function Hero() {
  const root = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", { y: 36, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.14, delay: 0.1 });
      // Background drifts slower than the page; content fades as it scrolls away
      gsap.to(".hero-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
      gsap.to(".hero-content", {
        opacity: 0,
        y: -60,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "40% top", end: "bottom top", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const toPlants = (e) => {
    e.preventDefault();
    if (lenis) lenis.scrollTo("#plants", { offset: -72 });
    else document.querySelector("#plants")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={root} id="home" className="relative isolate flex min-h-svh items-center justify-center overflow-hidden">
      <div className="hero-bg absolute inset-x-0 -top-[10%] -bottom-[10%] -z-20">
        <Image src="/assets/hero-bg.webp" alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-950/60 via-green-950/35 to-green-950/90" />

      <div className="hero-content mx-auto flex max-w-3xl flex-col items-center px-4 pt-20 text-center text-white md:px-8">
        <Image src="/assets/logo.webp" alt="Harsha Sai Nursery" width={112} height={112} priority className="hero-item mb-4 size-20 rounded-full object-cover shadow-lift ring-4 ring-amber-300/70 md:size-28" />
        <p className="hero-item mb-3 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm font-bold backdrop-blur">
          <Leaf className="size-4" /> Est. Burrilanka, Andhra Pradesh
        </p>
        <h1 className="text-lg font-bold">
          <BlurText as="span" text="Premium Quality" className="block" />
          <BlurText as="span" text="Nursery Plants" delay={0.09} className="block text-amber-300" />
        </h1>
        <p className="hero-item mt-4 max-w-xl text-base text-white/85">
          Specializing in 103+ exotic fruit plant varieties — imported from Thailand, Japan, Brazil &amp; beyond
        </p>
        <div className="hero-item mt-6 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center md:mt-8">
          <Button asChild size="lg">
            <a href="#plants" onClick={toPlants}>Explore Plants</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={`tel:${PHONE}`}>
              <HoverIcon icon={Phone} variant="wiggle" className="size-4" /> Call Now
            </a>
          </Button>
          <Button asChild size="lg" variant="whatsapp">
            <a href={waLink()} target="_blank" rel="noreferrer">
              <HoverIcon icon={MessageCircle} variant="wiggle" className="size-4" /> WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
