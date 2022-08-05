import Image from "next/image";
import React from "react";

const ProjectTemplate = ({
  title,
  details,
}: {
  title: string;
  details: string;
}) => {
  return (
    <div className="h-[39rem] w-full flex items-start project">
      <div className=" bg-[#18191F] p-8  py-8 h-auto w-80  text-white mt-10 z-20  box">
        <h1 className="text-2xl">{title}</h1>
        <p className="font-extralight mt-2 mb-8">{details}</p>
        <div className="flex items-center">
          <span className="mr-2 text-xs">View Project</span>
          <Image alt="icon" src="/vectors/arrow.svg" width={16} height={16} />
        </div>
      </div>
      <div className="bg-[#C1E5C0]  px-10 h-full w-3/4 mx-auto "></div>
    </div>
  );
};

export default ProjectTemplate;
