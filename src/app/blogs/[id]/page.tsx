"use client";
import { BlurImage } from "@/components/custom/blur-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { GetBlogId } from "./_actions";
import { ERROR_MSG } from "@/lib/constants";
import { BlogDetailSkeleton } from "@/components/custom/skeletons";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data, isError, isLoading } = GetBlogId(id);

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <Card className="my-8">
      <CardContent>
        <section className="w-full pt-8">
          <div className="relative">
            <BlurImage
              isLoading={isLoading}
              src={data?.image}
              alt={data?.title}
              className="mx-auto rounded-lg aspect-[2/1] object-cover w-full !h-[450px]"
            />
            <Button
              onClick={() => router.back()}
              className="absolute top-4 left-4 rounded-full"
              size={"icon"}
            >
              <ArrowLeft />
            </Button>
          </div>
        </section>
        <article className="py-12 md:py-16 lg:py-24">
          <div className="mx-auto max-w-4xl">
            {isLoading ? (
              <BlogDetailSkeleton />
            ) : (
              <>
                <h1 className="text-4xl font-bold tracking-tight">
                  {data?.title}
                </h1>
                <div
                  className="py-8 break-words"
                  dangerouslySetInnerHTML={{
                    __html: data?.body,
                  }}
                />
                <p className="text-muted-foreground text-sm">
                  Нийтэлсэн огноо: {data?.created_at}
                </p>
              </>
            )}
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default BlogDetail;
