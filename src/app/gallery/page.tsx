"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { galleryCards } from "@/data/dummyData";

const Gallery = () => {
  return (
    <div className="h-fit py-20 w-full">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-2 text-[#266431]">
        Зургийн цомог
      </h2>
      <LayoutGrid cards={galleryCards} />
    </div>
  );
};

export default Gallery;
