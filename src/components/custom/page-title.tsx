import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold  first:mt-0 pb-2 border-b tracking-normal">
      {title}
    </h2>
  );
};

export default PageTitle;
