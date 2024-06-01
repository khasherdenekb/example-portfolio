import PageTitle from "@/components/custom/page-title";
import { Product } from "@/components/shared/products";
import { dummyData } from "@/data/dummyData";
import React from "react";

const CategoryPage = () => {
  return (
    <>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 pt-4">
        {dummyData?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default CategoryPage;
