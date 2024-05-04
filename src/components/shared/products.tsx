import { ImageSkeleton } from "@/components/custom/icons";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TProduct } from "@/data/dummyData";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

export const ProductGrid = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="py-20">
      <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0 pb-2 border-b">
        Бүтээгдэхүүнүүд
      </h2>
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4 pt-4">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export const ProductSkeletonGrid = () => {
  return (
    <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4">
      {[...Array(12)].map(() => (
        <ProductSkeleton key={Math.random()} />
      ))}
    </div>
  );
};

export const Product = ({ product }: { product: TProduct }) => {
  function Price() {
    return <Badge>${product?.price}</Badge>;
  }

  return (
    ///products/${product.id}
    <Link className="" href={`#`}>
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
            <div>
              {product?.isAvailable ? (
                <Price />
              ) : (
                <Badge variant="secondary">Out of stock</Badge>
              )}
            </div>
            <Button size={"sm"}>
              Авах
              <ArrowUpRight className="pl-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export function ProductSkeleton() {
  return (
    <Link href="#">
      <div className="animate-pulse rounded-lg border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-800">
        <div className="relative h-full w-full">
          <div className="flex h-40 w-full items-center justify-center rounded bg-neutral-300 dark:bg-neutral-700 ">
            <ImageSkeleton />
          </div>
        </div>
        <div className="p-5">
          <div className="w-full">
            <div className="mb-4 h-2.5 w-48 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
            <div className="h-2 max-w-[360px] rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
