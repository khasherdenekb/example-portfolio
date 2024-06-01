"use client";
import React from "react";
import { galleryCards } from "@/data/dummyData";
import Link from "next/link";

type GalleryCard = {
  thumbnail: string;
  title: string;
  description: string;
  id: number | string;
};

const Gallery = () => {
  return (
    <div className="h-fit w-full">
      <section className="bg-[url(https://frisk-nextjs.vercel.app/assets/img/bg/breadcumb-bg1-7.jpg)] bg-cover bg-center bg-no-repeat mb-10">
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:py-32 sm:px-6 lg:flex lg:h-[300px] lg:items-center lg:justify-center lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white font-mono">
              Зургийн цомог
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {galleryCards?.map((card) => (
            <GalleryImage card={card} />
          ))}
        </div>
      </section>
    </div>
  );
};

const GalleryImage = ({ card }: { card: GalleryCard }) => {
  return (
    <Link key={card.id} href={`/gallery/${card.id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <img
          src={card.thumbnail}
          alt={card.title}
          width={600}
          height={400}
          className="h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="bg-white px-4 py-3 dark:bg-gray-950">
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {card.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Gallery;
