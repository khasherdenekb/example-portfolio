import Hero from "@/components/shared/hero";
import React from "react";
import { ImageBanner } from "@/components/shared/image-banner";
import { Newsletter } from "@/components/shared/newsletter";
import { ProductGrid } from "@/components/shared/products";
import { dummyData } from "@/data/dummyData";

const Home = () => {
  return (
    <div>
      <Hero />
      <ImageBanner />
      <ProductGrid products={dummyData} />
      <Newsletter />
    </div>
  );
};

export default Home;
