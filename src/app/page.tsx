import Hero from "@/components/shared/hero";
import React from "react";
import { LinkCategories } from "@/components/shared/link-categories";
import HomeVideo from "@/components/shared/home-video";
import HomeCaraousel from "@/components/shared/carousel/HomeCarousel";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeCaraousel type={"header"} />
      <LinkCategories />
      <HomeVideo type={"header"} />
      <HomeCaraousel type={"footer"} />
    </div>
  );
};

export default Home;
