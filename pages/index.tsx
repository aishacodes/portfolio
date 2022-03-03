import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import ProjectTemplate from "../components/ProjectTemplate";
import { HeaderData } from "../data/HeaderData";
import { ProjectData } from "../data/ProjectData";
import Typed from "typed.js";
import { AboutData } from "../data/AboutData";
import { tecnologies, tools } from "../data/TechnologyData";
import { socials } from "../data/Contact";
import Link from "next/link";
import { usetheme } from "../entities/theme.entity";

const Home: NextPage = () => {
  const el = useRef(null);

  const desc_el = useRef(null);
  const { colorTheme } = usetheme();

  // useEffect(() => {
  //   const typed = new Typed(el.current!, {
  //     strings: [HeaderData.name],
  //     // startDelay: 300,
  //     // typeSpeed: 100,
  //     // backSpeed: 100,
  //     // backDelay: 100,
  //     typeSpeed: 50,
  //     backSpeed: 50,
  //     showCursor: false,
  //   });

  //   return () => {
  //     typed.destroy();
  //   };
  // }, []);
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(colorTheme);
  }, [colorTheme]);

  return (
    <div>
      <NavBar />
      <header className="pt-24 flex flex-col items-center ">
        <div className="bg-[#B4A9F6] rounded-full h-[5rem] w-[5rem] flex items-center justify-center mb-5">
          <Image src="/vectors/avatar.svg" width={72} height={72} />
        </div>
        <h5>Hello, I’m</h5>
        <h3 className="text-4xl lg:text-6xl bebas-font uppercase">
          {HeaderData.name}
        </h3>
        {/* <h3
          className="text-6xl bebas-font uppercase min-h-[4rem] min-w-[24rem] "
          ref={el}
          style={{ whiteSpace: "pre" }}
        ></h3> */}
        <h3 className="text-3xl lg:text-6xl text-[#B9B9B9] bebas-font uppercase">
          {HeaderData.jobTitle}
        </h3>
      </header>
      <section
        className="w-9/12 mx-auto flex flex-col space-y-28 pt-24 "
        id="work"
      >
        {ProjectData.projects.map((project, index) => (
          <ProjectTemplate
            key={index}
            details={project.desc}
            title={project.name}
          />
        ))}
      </section>
      <section className="w-2/3 mx-auto pt-52" id="about">
        <div className="bebas-font text-[4rem] flex items-center">
          <h1 className="text-[#B9B9B9] mr-2">ABout</h1>
          <h1> ME</h1>
        </div>
        <p className="w-full lg:w-3/4 font-normal">{AboutData.shortDetail}</p>
      </section>
      <section className="w-2/3 mx-auto pt-16 grid lg:grid-cols-2">
        <div>
          <h2 className="text-4xl bebas-font font-normal mb-7">Technologies</h2>
          <div className="grid grid-cols-2 gap-y-2">
            {tecnologies.map((technology, technologyIndex) => (
              <p key={technologyIndex}>{technology}</p>
            ))}
          </div>
        </div>
        <div className="mt-12 lg:mt-0">
          <h2 className="text-4xl bebas-font font-normal mb-7">Tools</h2>
          <div className="grid grid-cols-2 gap-y-2">
            {tools.map((tool, toolIndex) => (
              <p key={toolIndex}>{tool}</p>
            ))}
          </div>
        </div>
      </section>
      <section
        className="max-w-max flex flex-col items-center mx-auto pt-52 transform transition-all"
        id="contact"
      >
        <p className="text-[#4F4F4F] text-lg text-center">
          Got a question, proposal or project or want to work together on
          <br /> something? Feel free to reach out.
        </p>
        <a
          href="mailto:aishatabdulfatah81@gmail.com"
          rel="noreferrer"
          target="_blank"
          className="text-xl lg:text-4xl font-bold text-[#313131] mt-6"
        >
          aishatabdulfatah81@gmail.com
        </a>
      </section>
      <footer className="w-2/3 mx-auto py-16 flex lg:flex-row flex-col justify-between items-center">
        <div className="flex items-center gap-x-6">
          {socials.map((social, socialIndex) => (
            <a
              href={social.link}
              key={socialIndex}
              rel="noreferrer"
              target="_blank"
            >
              <Image src={`/vectors/${social.icon}`} width={24} height={24} />
            </a>
          ))}
        </div>
        <p>Copyright © 2021 | Abdulfatah Aishat </p>{" "}
      </footer>
    </div>
  );
};

export default Home;
