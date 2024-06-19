"use client";
import { EmblaCarouselWithThumbnail } from "@/components/shared/carousel/embla-carousel-thumbnail";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { GetGalleryItems } from "./_actions";
import { ERROR_MSG } from "@/lib/constants";
import { DynamicSkeleton } from "@/components/custom/skeletons";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const GalleryDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = GetGalleryItems(id);
  const loadingArray = new Array(10).fill(null);
  const [indexOfData, setIndexOfData] = useState(0);

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <>
      <div>
        <Link href={"/gallery"}>
          <Button className="absolute top-[76px] rounded-full" size={"icon"}>
            <ArrowLeft />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
        {isLoading
          ? loadingArray?.map((item: any, key: React.Key) => (
              <React.Fragment key={key}>
                <DynamicSkeleton size="475" />
              </React.Fragment>
            ))
          : data?.data?.map((el: any, key: number) => (
              <Dialog key={key}>
                <DialogTrigger
                  onClick={() => setIndexOfData(key)}
                  className="rounded-xl"
                  asChild
                >
                  <Card>
                    <CardHeader className="!text-center">
                      <CardTitle>{el?.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        unoptimized
                        src={el?.image}
                        alt={el?.item_id}
                        className="!h-96 cursor-pointer object-cover object-top inset-0 w-full transition duration-200"
                        width={1000}
                        height={475}
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-sm xs:max-w-2xl md:max-w-3xl lg:max-w-4xl">
                  <EmblaCarouselWithThumbnail
                    indexOfData={indexOfData}
                    slides={data}
                  />
                </DialogContent>
              </Dialog>
            ))}
      </div>
    </>
  );
};

export default GalleryDetail;
