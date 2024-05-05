"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

const Gallery = () => {
  return (
    <div className="h-fit py-20 w-full">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-2 text-[#266431]">
        Зургийн цомог
      </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
};

export const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/travel-banner3.jpg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/travel-banner1.jpg",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/travel-banner2.jpg",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/travel-banner4.jpg",
  },
  {
    id: 5,
    className: "md:col-span-2",
    thumbnail: "/travel-banner3.jpg",
  },
  {
    id: 6,
    className: "col-span-1",
    thumbnail: "/travel-banner1.jpg",
  },
];

export default Gallery;
