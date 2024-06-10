"use client";
import React from "react";
import ReactPlayer from "react-player";

const HomeVideo = ({
  isLoading,
  isError,
  video,
}: {
  isLoading: boolean;
  isError: boolean;
  video: any;
}) => {
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
