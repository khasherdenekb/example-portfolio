"use client";
import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getBannerData } from "../_actions";
import { VideoSkeleton } from "../custom/skeletons";
import ReactPlayer from "react-player";
import { getYouTubeThumbnail } from "@/lib/utils";
import { ERROR_MSG } from "@/lib/constants";

export default function HomeVideo({ type }: { type: string }) {
  const { videosData, isLoading, isError } = getBannerData();

  const video = type === "header" ? videosData?.header : videosData?.footer;

  if (isLoading) return <VideoSkeleton />;

  if (isError) return <p>{ERROR_MSG}</p>;

  const thumbnailUrl = video
    ? getYouTubeThumbnail(video.url)
    : "/default-thumbnail.jpg";

  return (
    <div className="pt-10">
      <Dialog>
        <DialogTrigger className="cursor-pointer" asChild>
          <div className="relative h-[600px]">
            <Image
              unoptimized
              className="rounded-3xl shadow-2xl transition-shadow duration-300 ease-in-out object-cover"
              src={thumbnailUrl}
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
          <ReactPlayer width={"100%"} height={600} url={video?.url} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
