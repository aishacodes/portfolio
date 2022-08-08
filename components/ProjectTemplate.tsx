import Image from "next/image";
import React from "react";

const ProjectTemplate = ({ project }: { project: any }) => {
  return (
    <div className="h-[39rem] w-full flex items-start project">
      <div className=" bg-[#18191F] p-8  py-8 h-auto w-80  text-white mt-10 z-20  box">
        <h1 className="text-2xl">{project.name}</h1>
        <p className="font-extralight mt-2 mb-8">{project.desc}</p>
        <div className="flex items-center">
          <a
            className="mr-2 text-xs"
            target="_blank"
            rel="noreferrer"
            href={project.link}
          >
            View Project
          </a>
          <Image alt="icon" src="/vectors/arrow.svg" width={16} height={16} />
        </div>
      </div>
      <div className="bg-[#C1E5C0]   h-full w-3/4 mx-auto ">
        <img
          src={project.Image[0]}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectTemplate;
