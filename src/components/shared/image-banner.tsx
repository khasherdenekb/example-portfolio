"use client";
import React from "react";
import { LayoutGrid } from "../ui/layout-grid";

export function ImageBanner() {
  return (
    <div className="h-screen py-20 w-full">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-2 border-b">
        Аяллын зургууд
      </h2>
      <LayoutGrid cards={cards} />
    </div>
  );
}

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
