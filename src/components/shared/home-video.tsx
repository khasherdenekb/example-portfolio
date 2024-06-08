import Image from "next/image";
import { PlayCircleIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type HomeVideoProps = {
  videoSrc: string;
};

export default function HomeVideo({ videoSrc }: HomeVideoProps) {
  const videoId = videoSrc
    ?.split("embed/")?.[1]
    ?.split("?")?.[0]
    ?.split("/")
    ?.join("");
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;

  return (
    <div className="pt-10">
      <Dialog>
        <DialogTrigger className="cursor-pointer" asChild>
          <div className="relative h-[520px]">
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
          <iframe
            className="flex-1 w-full h-[400px] rounded-lg"
            src={videoSrc}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
