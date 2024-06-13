"use client";
import { useParams } from "next/navigation";
import { getAbout } from "../_actions";
import { PageTitle } from "@/components/custom/page-title";
import { Card, CardContent } from "@/components/ui/card";
import { BlurImage } from "@/components/custom/blur-image";

const AboutSlug = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = getAbout(slug?.toString());

  if (isError) return <>Error...</>;

  return (
    <Card className="my-5">
      <CardContent>
        <PageTitle className="py-5" title={data.title} />
        <div
          className="pb-2"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <BlurImage isLoading={isLoading} src={data.image} alt={data.title} />
        <p className="right-0 text-gray-400">Нийтэлсэн огноо: {data.date}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSlug;
