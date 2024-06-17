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

export const BlogDetailSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[250px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  );
};

export const BlogDetailFeatureSkeleton = ({ key }: { key?: number }) => {
  return (
    <div className="flex flex-col space-y-3" key={key}>
      <Skeleton className="h-20 w-full rounded-xl" />
    </div>
  );
};

export const BlogSkeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-[90%]" />
        <Skeleton className="h-8 w-[90%]" />
        <Skeleton className="h-8 w-[70%]" />
      </div>
      <Skeleton className="h-96 w-full rounded-xl" />
    </div>
  );
};
