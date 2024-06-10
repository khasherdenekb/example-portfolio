"use client";
import { useParams } from "next/navigation";
import React from "react";
import { getAbout } from "../_actions";
import PageTitle from "@/components/custom/page-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

const AboutSlug: React.FC = () => {
  const { slug } = useParams();
  const { data, isError, isLoading } = getAbout(slug?.toString());

  if (isLoading) return <>loading...</>;
  if (isError) return <>Error...</>;

  return (
    <Card className="my-5">
      <CardContent>
        <CardDescription className="pt-5 pb-3">
          <PageTitle title={data.title} />
        </CardDescription>
        <div
          className="py-2"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <img src={data.image} alt={data.title} />
        <p>{data.date}</p>
      </CardContent>
    </Card>
  );
};

export default AboutSlug;
