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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const SLIDES = Array.from(Array(20).keys());

const GalleryDetail = () => {
  //TODO: ID холбох заавар
  //TODO: SWR ашиглаж action дуудаад prop дээр нь id гаа дамжуулна
  //TODO: энд ID орж ирнэ
  //TODO: isError бөгөөд id байхгүй байвал 404 лүү буцаана
  const { id } = useParams();
  console.log(id);

  const array30 = Array(30).fill(null);
  const arrayForLoading = Array(10).fill(null);
  const [indexOfData, setIndexOfData] = React.useState(0);

  const isLoading = false;

  return (
    <>
      <Card className="my-8">
        <CardHeader className="text-center">
          <CardTitle>Гарчиг...</CardTitle>
          <CardDescription>Тайлбар...</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-5">
          {isLoading
            ? arrayForLoading.map((item, key) => (
                <React.Fragment key={key}>
                  <GalleryDetailSkeleton />
                </React.Fragment>
              ))
            : array30.map((el, key) => (
                <Dialog key={key}>
                  <DialogTrigger
                    onClick={() => setIndexOfData(key)}
                    className="rounded-xl"
                    asChild
                  >
                    <Image
                      unoptimized
                      src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
                      alt=""
                      className="!h-96 cursor-pointer object-cover object-top inset-0 w-full transition duration-200"
                      width={1000}
                      height={475}
                    />
                  </DialogTrigger>
                  <DialogContent className="max-w-sm xs:max-w-2xl md:max-w-3xl lg:max-w-4xl">
                    <EmblaCarouselWithThumbnail
                      indexOfData={indexOfData}
                      slides={SLIDES}
                    />
                  </DialogContent>
                </Dialog>
              ))}
        </CardContent>
      </Card>
    </>
  );
};

export default GalleryDetail;
