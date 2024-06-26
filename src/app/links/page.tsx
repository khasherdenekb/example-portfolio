"use client";
import React from "react";
import Link from "next/link";
import { BlurImage } from "@/components/custom/blur-image";
import { ERROR_MSG } from "@/lib/constants";
import { PageImage } from "@/components/custom/page-helper";
import { GetHomeData } from "@/components/shared/layout/body/_actions";
import { DynamicSkeleton } from "@/components/custom/skeletons";

type LinkCategoryProps = {
  id: number | string;
  title: string;
  image: string;
  url: string;
};

const Links = () => {
  const { linksData, isLoading, isError } = GetHomeData();
  const loadingArray = new Array(8).fill(null);

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <>
      <PageImage isLoading={isLoading} title="Бүтээгдэхүүнүүд" />
      <section className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10">
          {isLoading
            ? loadingArray.map((_, index) => (
                <React.Fragment key={index}>
                  <DynamicSkeleton size="550" />
                </React.Fragment>
              ))
            : linksData?.map((link: LinkCategoryProps) => (
                <LinkImages
                  link={link}
                  isLoading={isLoading}
                  key={link?.title}
                />
              ))}
        </div>
      </section>
    </>
  );
};

const LinkImages = ({
  link,
  isLoading,
  key,
}: {
  link: LinkCategoryProps;
  isLoading: boolean;
  key: string;
}) => {
  return (
    <Link key={key} href={link?.url || "#"} target="_blank">
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
