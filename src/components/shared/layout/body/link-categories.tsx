"use client";
import React from "react";
import Link from "next/link";
import { PageTitle } from "../../../custom/page-helper";
import { GetHomeData } from "./_actions";
import { BlurImage } from "../../../custom/blur-image";
import { ERROR_MSG } from "@/lib/constants";

type LinkCategoryProps = {
  id: number | string;
  title: string;
  image: string;
  url: string;
  target: string;
};

export const LinkCategories = ({ type }: { type: string }) => {
  const { linksData, programData, isLoading, isError } = GetHomeData();
  const listData = type == "category" ? linksData : programData;

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <div className="py-10">
      <PageTitle
        title={type == "category" ? "Бүтээгдэхүүний ангилал" : "Хөтөлбөрүүд"}
      />
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {listData?.slice(0, 6)?.map((category: LinkCategoryProps) => (
          <LinkCategory
            category={category}
            key={category?.id}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

const LinkCategory = ({
  category,
  isLoading,
}: {
  category: LinkCategoryProps;
  isLoading: boolean;
}) => {
  return (
    <Link
      href={category?.url || "/"}
      target={category?.target || "_blank"}
      key={category.id}
    >
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <BlurImage
          className="!h-[30rem] w-full transition-all duration-300 ease-in-out hover:scale-105 rounded-lg p-[2px]"
          alt={category.title}
          src={category.image}
          isLoading={isLoading}
          isCover={false}
        />
      </div>
      <p className="text-center pt-2 font-mono font-semibold">
        {category.title}
      </p>
    </Link>
  );
};
