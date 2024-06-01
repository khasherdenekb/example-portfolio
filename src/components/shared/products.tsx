import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TProduct } from "@/data/dummyData";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import PageTitle from "../custom/page-title";

export const Products = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="py-10">
      <PageTitle title="Онцлох бүтээгдэхүүнүүд" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
        {products?.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export const Product = ({ product }: { product: TProduct }) => {
  function Price() {
    return <Badge className="bg-[#2A6F37]">₮{product?.price}</Badge>;
  }

  return (
    <Link href={`/product/${product.id}`} key={product.id}>
      <Card className="h-full flex flex-col">
        <CardHeader className="p-0 w-full h-min">
          <img
            className="h-64 w-full object-cover transition-all duration-300 ease-in-out hover:scale-105 "
            src={product?.images?.[0]}
            alt={product.title}
          />
        </CardHeader>
        <CardContent className="flex flex-col justify-between p-4 flex-grow">
          <div>
            <h2 className="mt-2">{product.title}</h2>
            <p className="text-xs text-neutral-500 text-justify">
              {product.description}
            </p>
          </div>
          <div className="flex justify-between items-end mt-4">
            <div className="flex gap-2 h-8">
              {product?.isAvailable ? (
                <Price />
              ) : (
                <Badge className="bg-[#2A6F37] text-white" variant="secondary">
                  дууссан
                </Badge>
              )}
              <Badge variant="default">{product.categories[0].title}</Badge>
            </div>
            <Button className="bg-[#2A6F37]" size={"sm"}>
              Үзэх
              <ArrowUpRight className="pl-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
