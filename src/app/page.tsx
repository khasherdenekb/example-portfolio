import Hero from "@/components/shared/hero";
import React from "react";
import { Newsletter } from "@/components/shared/newsletter";
import { Products } from "@/components/shared/products";
import { dummyData, SLIDES, SLIDES2 } from "@/data/dummyData";
import EmblaCarousel from "@/components/shared/carousel/EmblaCarousel";
import Categories from "@/components/shared/categories";
import HomeVideo from "@/components/shared/home-video";

const Home = () => {
  return (
    <div>
      <Hero />
      <EmblaCarousel slides={SLIDES} />
      <Categories />
      <Products products={dummyData} />
      <HomeVideo videoSrc="https://www.youtube.com/embed/24Wr92ds2WI?si=-8LNp_CnEQyCRXbM" />
      <EmblaCarousel slides={SLIDES2} />
    </div>
  );
};

export default Home;
