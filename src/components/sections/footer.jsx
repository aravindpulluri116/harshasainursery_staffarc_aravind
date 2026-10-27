import Image from "next/image";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { NAV_LINKS, PHONE, waLink } from "@/lib/site";

const CATS = ["Fruit Plants", "Indoor Plants", "Outdoor Plants", "Ornamental Plants"];
const link = "text-sm text-white/70 transition-colors hover:text-lime";

export function Footer() {
  return (
    <footer className="bg-green-950 pb-16 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 min-[480px]:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/assets/logo.webp" alt="Harsha Sai Nursery" width={116} height={64} className="h-16 w-auto shrink-0 object-contain" />
            <span className="text-base font-bold">Harsha Sai Nursery</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Premium quality nursery plants with 103+ exotic fruit plant varieties. Specializing in imported plants from Thailand, Japan, Vietnam, Brazil, and beyond.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold">Quick Links</h4>
          <ul className="grid gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className={link}>{l.label === "About" ? "About Us" : l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold">Categories</h4>
          <ul className="grid gap-2">
            {CATS.map((c) => (
              <li key={c}><a href="#plants" className={link}>{c}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold">Contact Info</h4>
          <ul className="grid gap-2">
            <li className="flex items-center gap-2 text-sm text-white/70"><MapPin className="size-4" /> Burrilanka, 533126, AP</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-white/70" /><a href={`tel:${PHONE}`} className={link}>{PHONE}</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="size-4 text-white/70" /><a href={waLink()} target="_blank" rel="noreferrer" className={link}>WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-sm text-white/60 md:flex-row md:justify-between md:px-8">
          <span>© 2026 Harsha Sai Nursery. All Rights Reserved.</span>
          <span>Premium Plant Nursery — Burrilanka, AP</span>
        </div>
      </div>
    </footer>
  );
}
