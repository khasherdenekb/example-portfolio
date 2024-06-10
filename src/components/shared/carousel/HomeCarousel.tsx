"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { getBannerData } from "@/components/_actions";

const HomeCaraousel = ({ type }: { type: string }) => {
  const { sliderData, isLoading, isError } = getBannerData();
  const sliders =
    type == "header"
      ? sliderData?.header?.[0]?.images
      : sliderData?.footer?.[0]?.images;
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading sliders</div>;
  }

 
  return (
    <div className="p-0">
      <EmblaCarousel slides={sliders} />
    </div>
  );
};

export default HomeCaraousel;
