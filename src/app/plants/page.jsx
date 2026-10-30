import { Navbar } from "@/components/sections/navbar";
import { Plants } from "@/components/sections/plants";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Our Plants | Harsha Sai Nursery",
  description: "Full plant catalogue of Harsha Sai Nursery - every variety with real wholesale prices, search and filters.",
};

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
