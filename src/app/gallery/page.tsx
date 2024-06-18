"use client";
import React from "react";
import Link from "next/link";
import { PageImage } from "@/components/custom/page-helper";
import { getGalleries } from "./_actions";
import { ERROR_MSG } from "@/lib/constants";
import { BlurImage } from "@/components/custom/blur-image";
import { DynamicSkeleton } from "@/components/custom/skeletons";

type GalleryCard = {
  thumbnail: string;
  title: string;
  description: string;
  id: number | string;
};

const Gallery = () => {
  const { data, isLoading, isError } = getGalleries();
  if (isError) return <p>{ERROR_MSG}</p>;
  const loadingArray = new Array(10).fill(null);

  return (
    <>
      <PageImage isLoading={isLoading} title="Зургийн цомог" />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {isLoading
            ? loadingArray?.map((_, index) => (
                <React.Fragment key={index}>
                  <DynamicSkeleton size={"324"} />
                </React.Fragment>
              ))
            : data?.map((card: GalleryCard) => (
                <GalleryImage isLoading={isLoading} card={card} />
              ))}
        </div>
      </section>
    </>
  );
};

const GalleryImage = ({
  card,
  isLoading,
}: {
  card: GalleryCard;
  isLoading: boolean;
}) => {
  return (
    <Link key={card.id} href={`/gallery/${card.id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <BlurImage
          src={card.thumbnail}
          alt={card.title}
          isLoading={isLoading}
          className="!h-64 w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
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
