import React from "react";
import ProjectTemplate from "../components/ProjectTemplate";
import { ProjectData } from "../data/ProjectData";

const ProjectSection = () => {
  return (
    <div className="w-9/12 mx-auto flex flex-col bg-slate-500">
      {ProjectData.projects.map((project, index) => (
        <ProjectTemplate key={index} details={project.desc} title={project.name} />
      ))}
    </div>
  );
};

export default ProjectSection;