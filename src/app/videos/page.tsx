"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import { getVideos } from "./_actions";
import { PlayCircleIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { getYouTubeThumbnail } from "@/lib/utils";
import { LoadingSpinner } from "@/components/custom/loading-spinner";
import { BlurImage } from "@/components/custom/blur-image";
import { PageImage } from "@/components/custom/page-helper";
import { DynamicSkeleton } from "@/components/custom/skeletons";

const Videos = () => {
  const { data, isLoading, isError } = getVideos();
  const loadingArray = new Array(10).fill(null);
  // const thumbnailUrl = video
  //   ? getYouTubeThumbnail(video.url)
  //   : "/default-thumbnail.jpg";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //         document.body.offsetHeight - 500 &&
  //       !isValidating
  //     ) {
  //       setSize(size + 1);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [size, isValidating]);

  if (isError) return <div>Failed to load</div>;

  return (
    <>
      <PageImage isLoading={isLoading} title="Бичлэгүүд" />
      <div className="py-20 lg:py-5 gap-5 grid grid-cols-1 xl:grid-cols-2">
        {isLoading ? (
          loadingArray?.map((_, index) => (
            <React.Fragment key={index}>
              <DynamicSkeleton size="650" />
            </React.Fragment>
          ))
        ) : (
          <>
            {data?.map((item: any, index: any) => (
              <Dialog>
                <DialogTrigger className="cursor-pointer" asChild>
                  <Card className="relative ">
                    <CardHeader className="!text-center">
                      <CardTitle>Гарчиг...</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <BlurImage
                        isLoading={isLoading}
                        className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out !h-[550px]"
                        src={getYouTubeThumbnail(item?.url)}
                        alt={item?.url}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-white rounded-full p-2 w-14 h-14 flex items-center justify-center text-sm font-mono">
                          <PlayCircleIcon />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="!p-0 border-none max-w-[900px] text-white">
                  <ReactPlayer width={"100%"} height={600} url={item?.url} />
                </DialogContent>
              </Dialog>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default Videos;
