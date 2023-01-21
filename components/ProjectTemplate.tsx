import Image from "next/image";
import React from "react";

const ProjectTemplate = ({ project }: { project: any }) => {
  return (
    <div className="md:h-[25rem] lg:h-[62rem] relative w-full flex md:flex-row flex-col items-start project ">
      <div className=" bg-[#18191F] p-4 md:p-8  py-4 md:py-8 h-auto mb-4 md:mb-0 md:w-80  text-white mt-10 z-20  box">
        <h1 className="text-2xl">{project.name}</h1>
        <p className="font-extralight mt-2 mb-8 text-sm md:text-base">
          {project.desc}
        </p>
        <div className="mb-8 flex items-center gap-2 flex-wrap">
          {project.tech?.map((a: any, i: number) => (
            <span key={i}>{a}</span>
          ))}
        </div>

        <a target="_blank" rel="noreferrer" href={project.link}>
          <div className="flex items-center">
            <span className=" text-xs mr-2"> View Project</span>
            <Image alt="icon" src="/vectors/arrow.svg" width={16} height={16} />
          </div>
        </a>
      </div>
      <div className="bg-[#C1E5C0] border border-[#C1E5C0]  h-full md:w-10/12 lg:w-11/12 mx-auto ">
        <img
          src={project.Image[0]}
          alt=""
          className="h-[37.7rem] w-[33rem] object-contain z-20 absolute bottom-0 left-64"
        />
        <img
          src={project.Image[1]}
          alt=""
          className="h-full  w-[30rem]  object-fill absolute top-0 left-[46rem]"
        />
      </div>
    </div>
  );
};

export default ProjectTemplate;
