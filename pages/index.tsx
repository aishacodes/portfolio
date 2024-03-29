import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
import gsap from "gsap";
import Header from "../components/Header";
import Project from "../components/Project";
import ProjectSlider from "../organisms/ProjectCarousel";
import ProjectCarousel from "../organisms/ProjectCarousel";

const Home: NextPage = () => {
  const [activeIdea, setActiveIdea] = useState(0);

  const el = useRef(null);

  const desc_el = useRef(null);
  const { colorTheme } = usetheme();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(colorTheme);
  }, [colorTheme]);

  useEffect(() => {
    const blogTl = gsap.timeline({ delay: 1.5 });
    blogTl.fromTo(
      ".about-cover",
      {
        opacity: 0,
        yPercent: 50,
        stagger: 0.1,
      },
      { opacity: 1, yPercent: 0 }
    );
  }, []);
  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col">
      <NavBar />
      <main className="flex-grow overflow-auto">
        <Header />
        <Project />
        <section className="h-[35rem] md:h-[50rem] ml-10 lg:ml-60">
          <ProjectCarousel />
        </section>
        <section className="w-2/3 mx-auto pt-52" id="about">
          <div className="bebas-font text-[4rem] flex items-center">
            <h1 className="text-[#B9B9B9] mr-2">About</h1>
            <h1> ME</h1>
          </div>
          <p className="w-full lg:w-3/4 font-normal">{AboutData.shortDetail}</p>
        </section>
        <section className="w-2/3 mx-auto pt-16 grid lg:grid-cols-2">
          <div>
            <h2 className="text-4xl bebas-font font-normal mb-7">
              Technologies
            </h2>
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
      </main>
    </div>
  );
};

export default Home;
