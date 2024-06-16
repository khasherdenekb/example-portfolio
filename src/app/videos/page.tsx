"use client";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect } from "react";
import { getVideos } from "./_actions";
import { PlayCircleIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import Image from "next/image";
import { getYouTubeThumbnail } from "@/lib/utils";
import { LoadingSpinner } from "@/components/custom/loading-spinner";

const Videos = () => {
  const { items, isLoading, isError, size, setSize, isValidating } =
    getVideos();

  //TODO: бичлэг service-c дуудахдаа home-video component-с харна уу.
  //TODO: video thumbnail авах хэсэг.
  // const thumbnailUrl = video
  //   ? getYouTubeThumbnail(video.url)
  //   : "/default-thumbnail.jpg";

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
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <section className="relative mb-10 mt-8 h-96">
        <Image
          unoptimized
          src="/assets/gallery-background.jpeg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-white font-mono">
              Бичлэгүүд
            </p>
          </div>
        </div>
      </section>
      <Card className="py-20 lg:py-5">
        <CardContent className="gap-5 flex flex-col">
          {items.map((item, index) => (
            <Dialog>
              <DialogTrigger className="cursor-pointer" asChild>
                <div className="relative h-[600px]">
                  {/* TODO src нь thumbnail url байх ёстой */}
                  <Image
                    unoptimized
                    className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out object-cover"
                    src={"/travel-banner1.jpg"}
                    // src={thumbnailUrl}
                    alt={"Video thumbnail"}
                    fill
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white rounded-full p-2 w-14 h-14 flex items-center justify-center text-sm font-mono">
                      <PlayCircleIcon />
                    </span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="!p-0 border-none max-w-[900px] text-white">
                {/* <ReactPlayer width={"100%"} height={600} url={video?.url} /> */}
              </DialogContent>
            </Dialog>
          ))}
        </CardContent>
        {isValidating && (
          <div className="flex justify-center items-center w-full h-96">
            <LoadingSpinner size={36} />
          </div>
        )}
      </Card>
    </>
  );
};

export default Videos;
