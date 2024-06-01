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
    <div className="py-20">
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
      <div className="relative h-[200px] lg:h-[400px] z-[-1] shadow-lg rounded-lg bg-zinc-400">
        <Image
          className="object-cover rounded-lg p-[2px]"
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
