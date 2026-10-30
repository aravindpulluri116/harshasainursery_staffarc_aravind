import { licenceCertificate } from "@/assets/catalogue-images-8";
import Link from "next/link";
import { ArrowLeft, BadgeCheck } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import { waLink } from "@/lib/site";

export const metadata = {
  title: "Certifications | Harsha Sai Nursery",
  description: "Horticulture nursery licence held by Harsha Sai Nursery, issued under the Telangana Registration of Horticulture Nurseries (Regulation) Act, 2010.",
};

const DETAILS = [
  ["Licence No.", "03/TG-HNA/MDK/2024"],
  ["Nursery", "Harsha Sai Nursery"],
  ["Licence holder", "Sri Dodla Venkatesh"],
  ["Issued by", "District Horticulture & Sericulture Officer, Medak"],
  ["Date of issue", "22 August 2025"],
  ["Valid", "22 August 2025 to 21 August 2027"],
  ["Nursery extent", "0.5 hectare"],
  ["Authorised for", "Raising, exhibiting for sale and selling fruit plants (Fruit Crops, all varieties)"],
];

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80dvh] bg-beige-50 pt-24 pb-20 md:pt-28">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="mb-8 flex items-center gap-4">
            <Link href="/" aria-label="Back to home" className="grid size-10 place-items-center rounded-full bg-white text-ink shadow-soft transition hover:bg-green-50">
              <ArrowLeft className="size-5" />
            </Link>
            <h1 className="text-lg font-bold">Certifications</h1>
          </div>

          <div className="rounded-[28px] bg-green-950 p-6 text-white md:p-8">
            <span className="inline-flex items-center gap-2 text-sm font-bold tracking-widest text-lime uppercase">
              <BadgeCheck className="size-4" /> Licensed Nursery
            </span>
            <h2 className="mt-3 text-lg">Horticulture Nursery Licence</h2>
            <p className="mt-3 text-base text-white/75">
              Government of Telangana, Department of Horticulture &amp; Sericulture. Issued under the Telangana Registration of Horticulture Nurseries (Regulation) Act, 2010 (Act No. 13 of 2010).
            </p>
          </div>

          <dl className="mt-6 divide-y divide-ink/10 rounded-[28px] bg-white p-2 shadow-soft md:p-4">
            {DETAILS.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-4 py-3.5 sm:grid-cols-[170px_1fr] sm:gap-4">
                <dt className="text-sm font-bold text-ink/60">{k}</dt>
                <dd className="text-base font-bold text-ink">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="mb-6">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-800">Original licence certificate</p>
              <img src={licenceCertificate} alt="Horticulture nursery licence certificate issued to Harsha Sai Nursery" className="w-full max-w-2xl rounded-lg border border-emerald-200 shadow-sm" />
            </div>
            <p className="mt-5 text-sm text-ink/60">
            Details are taken from the licence issued by the District Horticulture &amp; Sericulture Officer, Medak. Want to see the original licence? Ask us on WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="whatsapp">
              <a href={waLink("Hi Harsha Sai Nursery! I'd like to see your nursery licence.")} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
            </Button>
            <Button asChild size="lg" variant="outlineDark">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
