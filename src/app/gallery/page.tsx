"use client";
import React from "react";
import { galleryCards } from "@/data/dummyData";
import Link from "next/link";
import Image from "next/image";
import { PageImage } from "@/components/custom/page-helper";
import { getGalleries } from "./_actions";
import { ERROR_MSG } from "@/lib/constants";

type GalleryCard = {
  thumbnail: string;
  title: string;
  description: string;
  id: number | string;
};

const Gallery = () => {
  const { data, isLoading, isError } = getGalleries();

  if (isError) return <p>{ERROR_MSG}</p>;
  return (
    <>
      <PageImage title="Зургийн цомог" />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {data?.map((card: GalleryCard) => (
            <GalleryImage card={card} />
          ))}
        </div>
      </section>
    </>
  );
};

const GalleryImage = ({ card }: { card: GalleryCard }) => {
  return (
    <Link key={card.id} href={`/gallery/${card.id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <Image
          unoptimized
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
