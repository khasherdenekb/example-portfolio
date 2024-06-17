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

const Videos = () => {
  const { items, isLoading, isError, size, setSize, isValidating } =
    getVideos();

  //TODO: бичлэг service-c дуудахдаа home-video component-с харна уу.
  //TODO: video thumbnail авах хэсэг.
  // const thumbnailUrl = video
  //   ? getYouTubeThumbnail(video.url)
  //   : "/default-thumbnail.jpg";

  const thumbnailUrl = getYouTubeThumbnail(
    "https://www.youtube.com/watch?v=M4sH0TvA1-M"
  );

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !isValidating
      ) {
        setSize(size + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [size, isValidating]);

  if (isError) return <div>Failed to load</div>;

  return (
    <>
      <PageImage title="Бичлэгүүд" />
      <div className="py-20 lg:py-5 gap-5 grid grid-cols-2">
        {items.map((item, index) => (
          <Dialog>
            <DialogTrigger className="cursor-pointer" asChild>
              <Card className="relative ">
                <CardHeader className="!text-center">
                  <CardTitle>Гарчиг...</CardTitle>
                </CardHeader>
                {/* TODO src нь thumbnail url байх ёстой */}
                <CardContent>
                  <BlurImage
                    isLoading={isLoading}
                    className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out !h-[550px]"
                    src={thumbnailUrl}
                    alt={"Video thumbnail"}
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
              {/* TODO энд бичлэгний url сервисээс дуудаж оруулна уу */}
              <ReactPlayer
                width={"100%"}
                height={600}
                url={"https://www.youtube.com/watch?v=M4sH0TvA1-M"}
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
      {isValidating && (
        <div className="flex justify-center items-center w-full h-96">
          <LoadingSpinner size={36} />
        </div>
      )}
    </>
  );
};

export default Videos;
