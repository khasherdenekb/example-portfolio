import { Skeleton } from "@/components/ui/skeleton";

export const VideoSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[600px] w-full rounded-xl bg-slate-200" />
    </div>
  );
};

export const PageSlugSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[600px] w-full rounded-xl bg-slate-200" />
    </div>
  );
};

export const GalleryDetailSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[475px] w-full rounded-xl bg-slate-200" />
    </div>
  );
};
