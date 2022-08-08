import React, { useEffect } from "react";
import { ProjectData } from "../data/ProjectData";
import ProjectTemplate from "./ProjectTemplate";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const prTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-animation-2",
        start: "bottom 100%",
      },
    });

    const prTl = gsap.timeline({ delay: 2 });
    prTl.fromTo(
      ".project-animation-1",
      {
        xPercent: -100,
        opacity: 0,
        stagger: 0.1,
      },
      { opacity: 1, xPercent: 0 }
    );
    prTl.fromTo(
      ".project-animation-2",
      {
        xPercent: 20,
        opacity: 0,
        stagger: 0.1,
      },
      { opacity: 1, xPercent: 0 }
    );
    prTl.fromTo(
      ".project-animation-3",
      {
        xPercent: -100,
        opacity: 0,
        stagger: 0.1,
      },
      { opacity: 1, xPercent: 0 }
    );
  }, []);
  return (
    <section
      className="w-11/12 lg:w-9/12 mx-auto flex flex-col  pt-24 "
      id="work"
    >
      {ProjectData.projects.map((project, index) => (
        <div
          className={` mb-20 project-animation project-animation-${index + 1}`}
          key={index}
        >
          <ProjectTemplate project={project} key={index} />
        </div>
      ))}
    </section>
  );
};

export default Project;
