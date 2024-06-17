"use client";
import { GalleryDetailSkeleton } from "@/components/custom/skeletons";
import { EmblaCarouselWithThumbnail } from "@/components/shared/carousel/embla-carousel-thumbnail";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { getGalleryItems } from "./_actions";
import { ERROR_MSG } from "@/lib/constants";

// const SLIDES = Array.from(Array(20).keys());

const GalleryDetail = () => {
  //TODO: ID холбох заавар
  //TODO: SWR ашиглаж action дуудаад prop дээр нь id гаа дамжуулна
  //TODO: энд ID орж ирнэ
  //TODO: isError бөгөөд id байхгүй байвал 404 лүү буцаана
  const { id } = useParams();
  const { data, isError, isLoading } = getGalleryItems(id);

  if (isError) return <p>{ERROR_MSG}</p>;

  const array30 = data.slice(30).fill(null);
  const arrayForLoading = data.slice(10).fill(null);
  const [indexOfData, setIndexOfData] = React.useState(0);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-8">
        {isLoading
          ? data.map((item: any, key: React.Key | null | undefined) => (
              <React.Fragment key={key}>
                <GalleryDetailSkeleton />
              </React.Fragment>
            ))
          : data.map((el: any, key: number ) => (
              <Dialog key={key}>
                <DialogTrigger
                  onClick={() => setIndexOfData(key)}
                  className="rounded-xl"
                  asChild
                >
                  <Card>
                    <CardHeader className="!text-center">
                      <CardTitle>Гарчиг...</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Image
                        unoptimized
                        src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
                        alt=""
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
