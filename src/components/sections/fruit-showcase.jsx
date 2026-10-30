import Image from "next/image";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Marquee } from "@/components/react-bits/marquee";
import { plants } from "@/data/plants";

const showcase = plants.filter((p) => p.image).slice(0, 20);

export function FruitShowcase() {
  if (showcase.length === 0) return null;

  return (
    <section className="bg-white py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader
          badge={<><Star className="size-4" /> Signature Collection</>}
          title="Our Fruit Plants"
          desc="Real plants from our nursery"
        />
      </div>
      <Marquee>
        {showcase.map((p) => (
          <figure key={p.id} className="w-40 shrink-0 md:w-52 lg:w-60">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-soft">
              <Image src={p.image} alt={p.name} fill sizes="240px" className="object-cover" />
            </div>
            <figcaption className="mt-2 truncate text-center text-sm font-bold">{p.name}</figcaption>
          </figure>
        ))}
      </Marquee>
    </section>
  );
}
