"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { GetVideos } from "./_actions";
import { PlayCircleIcon } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ReactPlayer from "react-player";
import { getYouTubeThumbnail } from "@/lib/utils";
import { BlurImage } from "@/components/custom/blur-image";
import { PageImage } from "@/components/custom/page-helper";
import { DynamicSkeleton } from "@/components/custom/skeletons";
import { Pagination } from "@nextui-org/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Videos = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [page, setPage] = useState(searchParams.get("page") || "1");
  const loadingArray = new Array(6).fill(null);
  const { data, isLoading, isError } = GetVideos(page);

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    if (currentParams.get("page") !== page) {
      setPage(currentParams.get("page") || "1");
    }
  }, [searchParams, page]);

  if (isError) return <div>Failed to load</div>;

  const handlePageChange = (newPage: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("page", newPage);
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  return (
    <>
      <PageImage isLoading={isLoading} title="Бичлэгүүд" />
      <div className="py-20 lg:py-5 gap-5 grid grid-cols-1 xl:grid-cols-2">
        {isLoading ? (
          loadingArray.map((_, index) => (
            <React.Fragment key={index}>
              <DynamicSkeleton size="650" />
            </React.Fragment>
          ))
        ) : (
          <>
            {data?.data?.map((item: any, index: any) => (
              <Dialog key={index}>
                <DialogTrigger className="cursor-pointer" asChild>
                  <Card className="relative ">
                    <CardHeader className="!text-center">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
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
      <Card className="p-2">
        <Pagination
          showControls
          color="success"
          total={data?.totalPages}
          initialPage={Number(1)}
          onChange={(e) => handlePageChange(e.toString())}
          variant={"flat"}
        />
      </Card>
    </>
  );
};

export default Videos;
