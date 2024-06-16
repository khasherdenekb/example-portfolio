"use client";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { getBannerData } from "@/components/_actions";
import { ERROR_MSG } from "@/lib/constants";

const HomeCaraousel = ({ type }: { type: string }) => {
  const { sliderData, isLoading, isError } = getBannerData();
  const sliders =
    type == "header"
      ? sliderData?.header?.[0]?.images
      : sliderData?.footer?.[0]?.images;

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <div className="p-0">
      <EmblaCarousel slides={sliders || [""]} isLoading={isLoading} />
    </div>
  );
};

export default HomeCaraousel;
