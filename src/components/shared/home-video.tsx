"use client";
import React from "react";
import ReactPlayer from "react-player";
import { getBannerData } from "../_actions";
import { PageTitle } from "../custom/page-title";
import { VideoSkeleton } from "../custom/skeletons";

const HomeVideo = ({ type }: { type: string }) => {
  const { videosData, isLoading, isError } = getBannerData();

  const video = type == "header" ? videosData?.header : videosData?.footer;

  if (isLoading) {
    return <VideoSkeleton />;
  }

  if (isError) {
    return <div>Error loading sliders</div>;
  }

  return (
    <>
      <PageTitle title="Бичлэг" />
      <ReactPlayer width={"100%"} height={600} url={video?.url} />
    </>
  );
};

export default HomeVideo;
