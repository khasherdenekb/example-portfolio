"use client";
import React from "react";
import { getAbout } from "./_actions";

const AboutSlug: React.FC = () => {
  const { data, isError, isLoading } = getAbout();

  if (isLoading) return <>loading...</>;
  if (isError) return <>Error...</>;

  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
      <img src={data.image} alt={data.title} />
      <p>{data.date}</p>
    </div>
  );
};

export default AboutSlug;
