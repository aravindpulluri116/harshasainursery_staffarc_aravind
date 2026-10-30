import { nurseryLogoTransparent } from "@/assets/catalogue-images-7";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { InstagramIcon } from "@/components/icons/instagram";
import { YouTubeIcon } from "@/components/icons/youtube";
import { INSTAGRAM, NAV_LINKS, PHONE, YOUTUBE, waLink } from "@/lib/site";

const CATS = ["Fruit Plants", "Indoor Plants", "Outdoor Plants", "Ornamental Plants"];
const link = "text-sm text-white/70 transition-colors hover:text-lime";

export function Footer() {
  return (
    <footer className="bg-green-950 pb-16 text-white md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 min-[480px]:grid-cols-2 md:px-8 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2">
            <Image src={nurseryLogoTransparent} alt="Harsha Sai Nursery" width={116} height={75} className="h-16 w-auto shrink-0 object-contain" />
            <span className="text-base font-bold">Harsha Sai Nursery</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-white/70">
            Premium quality fruit plant nursery. Coconut, mango, jackfruit, sapota, guava, custard apple and lemon varieties at wholesale prices.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold">Quick Links</h4>
          <ul className="grid gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href.startsWith("#") ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${l.href}` : `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${l.href}`} className={link}>{l.label === "About" ? "About Us" : l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold">Categories</h4>
          <ul className="grid gap-2">
            {CATS.map((c) => (
              <li key={c}><a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/plants`} className={link}>{c}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-base font-bold">Contact Info</h4>
          <ul className="grid gap-2">
            <li className="flex items-center gap-2 text-sm text-white/70"><MapPin className="size-4" /> Laxmapoor, Ramayampet, Medak, Telangana 502115</li>
            <li className="flex items-center gap-2"><Phone className="size-4 text-white/70" /><a href={`tel:${PHONE}`} className={link}>{PHONE}</a></li>
            <li className="flex items-center gap-2"><WhatsAppIcon className="size-4 text-white/70" /><a href={waLink()} target="_blank" rel="noreferrer" className={link}>WhatsApp Us</a></li>
            <li className="flex items-center gap-2"><InstagramIcon className="size-4 text-white/70" /><a href={INSTAGRAM} target="_blank" rel="noreferrer" className={link}>Instagram</a></li>
            <li className="flex items-center gap-2"><YouTubeIcon className="size-4 text-white/70" /><a href={YOUTUBE} target="_blank" rel="noreferrer" className={link}>YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 text-sm text-white/60 md:flex-row md:justify-between md:px-8">
          <span>© 2026 Harsha Sai Nursery. All Rights Reserved.</span>
          <span>Premium Plant Nursery — Ramayampet, Telangana</span>
        </div>
      </div>
    </footer>
  );
}

