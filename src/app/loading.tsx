import { LoadingSpinner } from "@/components/custom/loading-spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <LoadingSpinner size={40} />
    </div>
  );
};

export default Loading;
