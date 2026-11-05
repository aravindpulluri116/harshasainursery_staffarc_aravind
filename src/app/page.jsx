import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Offerings } from "@/components/sections/offerings";
import { FeaturedPlants } from "@/components/sections/featured-plants";
import { Categories } from "@/components/sections/categories";
import { FruitShowcase } from "@/components/sections/fruit-showcase";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Branches } from "@/components/sections/branches";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Offerings />
        <FeaturedPlants />
        <Categories />
        <FruitShowcase />
        <About />
        <Gallery />
        <Contact />
        <Branches />
      </main>
      <Footer />
    </>
  );
}
