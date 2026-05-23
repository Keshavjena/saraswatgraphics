import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ExploreCategories } from "@/components/sections/ExploreCategories";
import { PopularProducts } from "@/components/sections/PopularProducts";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white">
        <Hero />
        <ExploreCategories />
        <PopularProducts />
        <TrustIndicators />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
