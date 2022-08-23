import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeaderData } from "../data/HeaderData";
import CloseIcon from "./vectors/CloseIcon";
import MenuIcon from "./vectors/MenuIcon";
import { gsap } from "gsap";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const desktopTl = gsap.timeline();
    desktopTl
      .fromTo(
        ".desktopLogo",
        {
          xPercent: -100,
          opacity: 0,
          stagger: 0.1,
        },
        { opacity: 1, xPercent: 100 }
      )
      .fromTo(
        ".links > a",
        {
          xPercent: 30,
          opacity: 0,
          stagger: 0.1,
        },
        { opacity: 1, xPercent: -30 }
      );
  }, []);

  return (
    <nav className="z-50 bg-white dark:bg-slate-900  w-full py-5  bebas-font drop-shadow">
      <div className="w-9/12 mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-lg md:text-base desktopLogo">{HeaderData.name}</a>
        </Link>
        <div className="md:flex items-center space-x-8 text-[#4F4F4F] hidden links">
          <Link href="#about">
            <a href="#about">About</a>
          </Link>
          <Link href="#work">
            <a href="#work">Work</a>
          </Link>
          <Link href="#contact">
            <a href="#contact">Contact</a>
          </Link>
        </div>
        <div className="flex space-x-4 items-center justify-center md:hidden">
          <div
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <MenuIcon />
          </div>
        </div>
        <div
          className={`right-0 top-0 space-y-10 bg-white dark:bg-primary lg:hidden w-64 p-5 h-auto fixed z-50 transition-all duration-500     ${
            isMenuOpen ? "mr-0" : "-mr-64"
          }`}
        >
          <div
            className="flex justify-end"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            <CloseIcon />
          </div>
          <p className="text-xl" onClick={() => setIsMenuOpen(false)}>
            <Link href="#about">About</Link>
          </p>
          <p className="text-xl" onClick={() => setIsMenuOpen(false)}>
            <Link href="#work">Work</Link>
          </p>
          <p className="text-xl" onClick={() => setIsMenuOpen(false)}>
            <Link href="#contact">Contact</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
