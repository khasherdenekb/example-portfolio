"use client";
import React from "react";
import ReactPlayer from "react-player";

const HomeVideo = () => {
  return (
    <>
      <ReactPlayer
        width={"100%"}
        height={600}
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      />
    </>
  );
};

export default HomeVideo;
