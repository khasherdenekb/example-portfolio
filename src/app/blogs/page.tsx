"use client";
import Link from "next/link";
import { GetBlogs } from "./_actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { ERROR_MSG } from "@/lib/constants";
import { Pagination } from "@nextui-org/pagination";
import { Badge } from "@/components/ui/badge";
import { BlurImage } from "@/components/custom/blur-image";
import React, { useState, useEffect } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { BlogSkeleton, DynamicSkeleton } from "@/components/custom/skeletons";
import { BlogFilter } from "./_components/blog-filter";

type BlogFeatureDetailProps = {
  id: number | string;
  title: string;
  description: string;
  image: string;
  category_name: string;
};

const Blogs = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const loadingArray = new Array(8).fill(null);

  const [categoryId, setCategoryId] = useState(
    searchParams.get("categoryId") || ""
  );
  const [page, setPage] = useState(searchParams.get("page") || "1");

  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    const newPage = currentParams.get("page") || "1";
    const newCategoryId = currentParams.get("categoryId") || "";

    if (newPage !== page || newCategoryId !== categoryId) {
      setPage(newPage);
      setCategoryId(newCategoryId);
    }
  }, [searchParams, page, categoryId]);

  const { data, isError, isLoading } = GetBlogs(page, categoryId);

  const handlePageChange = (newPage: string) => {
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("page", newPage);
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-8 py-8">
      <Card className="prose prose-gray max-w-none dark:prose-invert">
        <CardContent>
          <figure className="mb-6 -mx-4 md:-mx-0 my-8">
            <BlurImage
              isLoading={data?.data?.length === 0 || isLoading}
              src={data?.data?.[0]?.image}
              alt={data?.data?.[0]?.title || "no-img"}
              className="aspect-[3/1] w-full rounded-lg object-cover"
            />
          </figure>
          {isLoading ? (
            <BlogSkeleton />
          ) : data.data.length > 0 ? (
            <>
              <div className="space-y-2 not-prose ">
                <h1 className="text-xl lg:text-4xl font-extrabold tracking-tight">
                  {data?.data?.[0]?.title}
                </h1>
              </div>
              <div
                className="py-8 break-words"
                dangerouslySetInnerHTML={{
                  __html: data?.data?.[0]?.body,
                }}
              />
            </>
          ) : (
            <div>
              <p>Мэдээлэл байхгүй байна...</p>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="space-y-6 h-fit">
        <CardContent className="grid gap-4 py-8">
          <BlogFilter />
          <h2 className="text-2xl font-bold tracking-tight">
            Нэмэлт мэдээнүүд
          </h2>
          {data?.data?.length > 1 && (
            <div className="grid gap-4">
              {isLoading
                ? loadingArray.map((_, index) => (
                    <React.Fragment key={index}>
                      <DynamicSkeleton size="80" />
                    </React.Fragment>
                  ))
                : data?.data
                    ?.slice(1)
                    ?.map((blog: BlogFeatureDetailProps) => (
                      <BlogFeatureDetail
                        blog={blog}
                        isLoading={isLoading}
                        key={blog.id}
                      />
                    ))}
            </div>
          )}
          {data?.data?.length > 1 ? (
            <Card className="p-2">
              <Pagination
                showControls
                color="success"
                total={data.totalPages}
                initialPage={Number(page)}
                onChange={(e) => handlePageChange(e.toString())}
                variant={"flat"}
              />
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardDescription>Мэдээлэл байхгүй байна...</CardDescription>
              </CardHeader>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

const BlogFeatureDetail = ({
  blog,
  isLoading,
  key,
}: {
  blog: BlogFeatureDetailProps;
  isLoading: boolean;
  key: number | string;
}) => {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className="grid grid-cols-[120px_1fr] gap-4"
      key={key}
    >
      <BlurImage
        src={blog?.image}
        alt={blog?.title}
        isLoading={isLoading}
        className="aspect-[3/2] rounded-lg object-cover"
      />
      <div className="space-y-1">
        <h3 className="text-md font-medium tracking-tight line-clamp-2">
          {blog.title}
        </h3>
        <Badge>{blog.category_name}</Badge>
      </div>
    </Link>
  );
};

export default Blogs;
