import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TProduct } from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import PageTitle from "../custom/page-title";

export const Products = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="py-20">
      <PageTitle title="Онцлох бүтээгдэхүүнүүд" />
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 pt-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export const Product = ({ product }: { product: TProduct }) => {
  function Price() {
    return <Badge className="bg-[#2A6F37]">${product?.price}</Badge>;
  }

  return (
    <Link href={`/product/1`}>
      <Card className="h-full">
        <CardHeader className="p-0">
          <div className="relative h-60 w-full">
            <Image
              unoptimized
              className="rounded-t-lg"
              src={product?.images?.[0]}
              alt="product image"
              fill
              sizes="(min-width: 1000px) 30vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </CardHeader>
        <CardContent className="grid gap-1 p-4">
          <h2 className="mt-2">{product.title}</h2>
          <p className="text-xs text-neutral-500 text-justify">
            {product.description}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2 h-8 pt-1">
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
