"use client";
import { useParams } from "next/navigation";
import { getAbout } from "../_actions";
import { PageTitle } from "@/components/custom/page-helper";
import { Card, CardContent } from "@/components/ui/card";
import { BlurImage } from "@/components/custom/blur-image";
import { PageSlugSkeleton } from "@/components/custom/skeletons";
import { ERROR_MSG } from "@/lib/constants";

const AboutSlug = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = getAbout(slug?.toString());

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <Card className="my-5">
      <CardContent>
        <PageTitle
          className="py-5 text-center"
          title={isLoading ? "Уншиж байна..." : data.title}
        />
        {isLoading ? (
          <PageSlugSkeleton />
        ) : (
          <div
            className="pb-2"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
        <BlurImage isLoading={isLoading} src={data?.image} alt={data?.title} />
        <p className="right-0 text-muted-foreground">
          Нийтэлсэн огноо: {isLoading ? "Уншиж байна..." : data?.date}
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSlug;
