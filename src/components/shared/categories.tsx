"use client";
import React from "react";
import Link from "next/link";
import { PageTitle } from "../custom/page-title";
import { getBannerData } from "../_actions";
import { BlurImage } from "../custom/blur-image";
type CategoryProps = {
  id: number | string;
  title: string;
  image: string;
};

const Categories = () => {
  const { categoryData, isLoading, isError } = getBannerData();

  if (isError) {
    return <div>Error loading categories</div>;
  }

  return (
    <div className="py-10">
      <PageTitle title="Ангилал" />
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categoryData?.map((category: CategoryProps) => (
          <Category
            category={category}
            key={category?.id}
            isLoading={isLoading}
          />
        ))}
      </div>
    </div>
  );
};

const Category = ({
  category,
  isLoading,
}: {
  category: CategoryProps;
  isLoading: boolean;
}) => {
  return (
    <Link href={`/categories/${category.id}`} key={category.id}>
      <div className="group h-64 relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <BlurImage
          className="h-64 w-full object-cover transition-all duration-300 ease-in-out hover:scale-105 rounded-lg p-[2px]"
          alt={category.title}
          src={category.image}
          isLoading={isLoading}
        />
      </div>
      <p className="text-center pt-2 font-mono font-semibold">
        {category.title}
      </p>
    </Link>
  );
};

export default Categories;
