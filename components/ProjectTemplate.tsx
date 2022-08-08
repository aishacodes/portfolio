import Image from "next/image";
import React from "react";

const ProjectTemplate = ({ project }: { project: any }) => {
  return (
    <div className="md:h-[25rem] lg:h-[42rem] w-full flex md:flex-row flex-col items-start project ">
      <div className=" bg-[#18191F] p-4 md:p-8  py-4 md:py-8 h-auto w-full mb-4 md:mb-0 md:w-80  text-white mt-10 z-20  box">
        <h1 className="text-2xl">{project.name}</h1>
        <p className="font-extralight mt-2 mb-8 text-sm md:text-base">
          {project.desc}
        </p>

        <a target="_blank" rel="noreferrer" href={project.link}>
          <div className="flex items-center">
            <span className=" text-xs mr-2"> View Project</span>
            <Image alt="icon" src="/vectors/arrow.svg" width={16} height={16} />
          </div>
        </a>
      </div>
      <div className="bg-[#C1E5C0]  h-full md:w-11/12 lg:w-3/4 mx-auto ">
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
