import Link from "next/link";
import React, { useEffect } from "react";
import { HeaderData } from "../data/HeaderData";

const NavBar = () => {
  return (
    <nav className="z-50 bg-white dark:bg-slate-900  w-full py-5  sticky top-0 bebas-font">
      <div className="w-9/12 mx-auto flex items-center justify-between">
        <h1>{HeaderData.name}</h1>
        <div className="flex items-center space-x-8 text-[#4F4F4F]">
          <Link href="#about">
            <a href="#about">About</a>
          </Link>
          <Link href="#work">
            <a href="#work">Work</a>
          </Link>
          <Link href="#contact">
            <a href="#contact">Contact</a>
          </Link>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
