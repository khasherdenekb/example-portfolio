import { Skeleton } from "@/components/ui/skeleton";

export const DynamicSkeleton = ({ size }: { size: string }) => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton
        className="w-full rounded-xl bg-slate-200"
        style={{ height: `${size}px` }}
      />
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
