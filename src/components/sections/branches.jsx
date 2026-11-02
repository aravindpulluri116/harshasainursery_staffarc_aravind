import { MapPin } from "lucide-react";

const BRANCHES = [
  { label: "Main Branch", place: "Lakshmapur village, Medak district, Telangana" },
  { label: "Second Branch", place: "Rajahmundry, Veeravaram" },
  { label: "Third Branch", place: "Dharmapuri, Tamil Nadu" },
];

export function Branches() {
  return (
    <section id="branches" className="bg-beige-100">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <span className="mb-3 inline-flex items-center gap-2 text-sm font-bold tracking-widest text-green-600 uppercase">
          <MapPin className="size-4" /> Visit Us
        </span>
        <h2 className="text-lg">Our Branches</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {BRANCHES.map((b) => (
            <div key={b.label} className="rounded-[22px] bg-white p-6 shadow-soft">
              <p className="text-sm font-bold tracking-widest text-green-600 uppercase">{b.label}</p>
              <p className="mt-2 text-base text-ink">{b.place}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
