"use client";
import React from "react";
import EmblaCarousel from "./embla-carousel";
import { ERROR_MSG } from "@/lib/constants";
import { getHomeData } from "../layout/body/_actions";

export const HomeCaraousel = ({ type }: { type: string }) => {
  const { sliderData, isLoading, isError } = getHomeData();
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
