"use client";
import Hero from "@/components/shared/hero";
import React from "react";
import { Products } from "@/components/shared/products";
import { dummyData, SLIDES, SLIDES2 } from "@/data/dummyData";
import EmblaCarousel from "@/components/shared/carousel/EmblaCarousel";
import Categories from "@/components/shared/categories";
import HomeVideo from "@/components/shared/home-video";
import { getBannerData } from "@/components/_actions";

const Home = () => {
  const { sliderData, categoryData,
    productsData,
    videosData,
    isLoading, isError } = getBannerData();
  const sliderHeader = sliderData?.header?.[0]?.images;
  const sliderFooter = sliderData?.footer?.[0]?.images;
  const products = productsData?.header;
  const video = videosData?.header;
  return (
    <div>
      <Hero />

      <EmblaCarousel
        slides={sliderHeader?.length > 0 ? sliderHeader : SLIDES2}
        isLoading={isLoading}
        isError={isError}
      />
      <Categories
        isLoading={isLoading}
        isError={isError}
        categories={categoryData}
      />
      <Products products={products} isLoading={isLoading}
        isError={isError}/>
      <HomeVideo isLoading={isLoading}
        isError={isError} video={video}/>

      <EmblaCarousel
        slides={sliderFooter?.length > 0 ? sliderFooter : SLIDES2}
        isLoading={isLoading}
        isError={isError}
      />
    </div>
  );
};

export default Home;
