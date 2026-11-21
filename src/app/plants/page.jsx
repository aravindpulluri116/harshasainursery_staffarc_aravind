import { pageMetadata } from "@/lib/seo";
import { Navbar } from "@/components/sections/navbar";
import { Plants } from "@/components/sections/plants";
import { Footer } from "@/components/sections/footer";



export const metadata = pageMetadata({"title": "Plant Catalogue | Harsha Sai Nursery", "path": "/plants", "description": "Browse coconut, mango, fruit and indoor plants, spices and vegetable saplings at Harsha Sai Nursery. View current wholesale prices and individual plant details."});

export default function PlantsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-[72px]">
        <Plants />
      </main>
      <Footer />
    </>
  );
}
