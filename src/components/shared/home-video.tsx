"use client";
import React from "react";
import ReactPlayer from "react-player";
import { getBannerData } from "../_actions";

const HomeVideo = ({ type }: { type: string }) => {
  const { videosData, isLoading, isError } = getBannerData();

  const video = type == "header" ? videosData?.header : videosData?.footer;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading categories</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading sliders</div>;
  }

  return (
    <>
      <ReactPlayer width={"100%"} height={600} url={video?.url} />
    </>
  );
};

export default HomeVideo;
