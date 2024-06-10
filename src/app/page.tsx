import Hero from "@/components/shared/hero";
import React from "react";
import { Products } from "@/components/shared/products";
import Categories from "@/components/shared/categories";
import HomeVideo from "@/components/shared/home-video";
import HomeCaraousel from "@/components/shared/carousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeCaraousel type={"header"} />
      <Categories />
      <Products type={"header"} />
      <HomeVideo type={"header"} />
      <HomeCaraousel type={"footer"} />
    </div>
  );
};

export default Home;
