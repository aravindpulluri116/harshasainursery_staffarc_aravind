"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Toaster } from "sonner";
import { CartProvider } from "@/lib/cart";

const LenisContext = createContext(null);
export const useLenis = () => useContext(LenisContext);

export function Providers({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const instance = new Lenis({ lerp: 0.1, smoothWheel: true });
    // Drive Lenis from GSAP's ticker so ScrollTrigger and smooth scroll stay in sync.
    const tick = (time) => instance.raf(time * 1000);
    instance.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    setLenis(instance);

    return () => {
      gsap.ticker.remove(tick);
      instance.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      <CartProvider>
        {children}
        <Toaster position="top-center" richColors closeButton style={{ pointerEvents: "auto" }} />
      </CartProvider>
    </LenisContext.Provider>
  );
}
