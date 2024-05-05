import Hero from "@/components/shared/hero";
import React from "react";
import { Newsletter } from "@/components/shared/newsletter";
import { ProductGrid } from "@/components/shared/products";
import { dummyData, OPTIONS, SLIDES, SLIDES2 } from "@/data/dummyData";
import EmblaCarousel from "@/components/shared/carousel/EmblaCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <ProductGrid products={dummyData} />
      <EmblaCarousel slides={SLIDES2} options={OPTIONS} />
      <Newsletter />
    </div>
  );
};

export default Home;
