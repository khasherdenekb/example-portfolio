import React from "react";
import Image from "next/image";
import { categories } from "@/data/dummyData";
import Link from "next/link";
import PageTitle from "../custom/page-title";

type CategoryProps = {
  id: number | string;
  title: string;
  image: string;
};

const Categories = () => {
  return (
    <div className="py-10">
      <PageTitle title="Ангилал" />
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-4 gap-4">
        {categories?.map((category) => (
          <Category category={category} />
        ))}
      </div>
    </div>
  );
};

const Category = ({ category }: { category: CategoryProps }) => {
  return (
    <Link href={`/categories/${category.id}`} key={category.id}>
      <div className="group h-64 relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl cursor-pointer">
        <Image
          className="h-64 w-full object-cover transition-all duration-300 ease-in-out hover:scale-105 rounded-lg p-[2px]"
          src={category.image}
          alt="product image"
          fill
        />
      </div>
      <p className="text-center pt-2 font-mono font-semibold">
        {category.title}
      </p>
    </Link>
  );
};

export default Categories;
