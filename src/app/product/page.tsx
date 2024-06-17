"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlurImage } from "@/components/custom/blur-image";
import { ERROR_MSG } from "@/lib/constants";
import { getHomeData } from "@/components/shared/layout/body/_actions";

type LinkCategoryProps = {
  id: number | string;
  title: string;
  image: string;
  url: string;
};

const Links = () => {
  const { linksData, isLoading, isError } = getHomeData();

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <div className="h-fit w-full py-8">
      <section className="relative mb-10 h-96">
        <Image
          unoptimized
          src="/assets/gallery-background.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white font-mono">
              Бүтээгдэхүүн ангилал
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {linksData?.map((link: LinkCategoryProps) => (
            <LinkImages link={link} isLoading={isLoading} />
          ))}
        </div>
      </section>
    </div>
  );
};

const LinkImages = ({
  link,
  isLoading,
}: {
  link: LinkCategoryProps;
  isLoading: boolean;
}) => {
  return (
    <Link key={link.id} href={link?.url || "#"} target="_blank">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer j">
        <BlurImage
          className="!h-[30rem] w-full object-cover transition-all duration-300 ease-in-out hover:scale-105 rounded-lg p-[2px]"
          alt={link.title}
          src={link.image}
          isLoading={isLoading}
        />
        <div className="bg-white px-4 py-5 dark:bg-gray-950">
          <h3 className="text-lg font-semibold">{link.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Links;
