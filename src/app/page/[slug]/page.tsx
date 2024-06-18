"use client";
import { useParams } from "next/navigation";
import { GetAbout } from "../_actions";
import { PageTitle } from "@/components/custom/page-helper";
import { Card, CardContent } from "@/components/ui/card";
import { BlurImage } from "@/components/custom/blur-image";
import { ERROR_MSG } from "@/lib/constants";
import { DynamicSkeleton } from "@/components/custom/skeletons";

const AboutSlug = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = GetAbout(slug?.toString());

  if (isError) return <p>{ERROR_MSG}</p>;

  return (
    <Card className="my-5">
      <CardContent>
        <PageTitle
          className="py-5 text-center"
          title={isLoading ? "Уншиж байна..." : data.title}
        />
        {isLoading ? (
          <DynamicSkeleton size="750" />
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
