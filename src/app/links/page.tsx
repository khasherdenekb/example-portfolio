"use client";
import React from "react";
import Link from "next/link";
import { BlurImage } from "@/components/custom/blur-image";
import { ERROR_MSG } from "@/lib/constants";
import { PageImage } from "@/components/custom/page-helper";
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
    <>
      <PageImage title="Бүтээгдэхүүнүүд" />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {linksData?.map((link: LinkCategoryProps) => (
            <LinkImages link={link} isLoading={isLoading} />
          ))}
        </div>
      </section>
    </>
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
          isCover={false}
        />
        <div className="bg-white px-4 py-5 dark:bg-gray-950">
          <h3 className="text-lg font-semibold">{link.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Links;
