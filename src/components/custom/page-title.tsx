import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h2 className="scroll-m-20 text-xl lg:text-3xl font-semibold tracking-tight first:mt-0 py-5 text-[#266431]">
      {title}
    </h2>
  );
};

export default PageTitle;
