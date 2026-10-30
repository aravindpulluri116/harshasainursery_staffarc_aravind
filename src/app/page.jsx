import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Categories } from "@/components/sections/categories";
import { FruitShowcase } from "@/components/sections/fruit-showcase";
import { About } from "@/components/sections/about";
import { FeaturedPlants } from "@/components/sections/featured-plants";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FruitShowcase />
        <About />
        <FeaturedPlants />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

