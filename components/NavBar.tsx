import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HeaderData } from "../data/HeaderData";
import CloseIcon from "./vectors/CloseIcon";
import MenuIcon from "./vectors/MenuIcon";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-50 bg-white dark:bg-slate-900  w-full py-5  sticky top-0 bebas-font">
      <div className="w-9/12 mx-auto flex items-center justify-between">
        <h1>{HeaderData.name}</h1>
        <div className="md:flex items-center space-x-8 text-[#4F4F4F] hidden">
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
          <p className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <Link href="#about">About</Link>
          </p>
          <p className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <Link href="#works">Work</Link>
          </p>
          <p className="nav-item" onClick={() => setIsMenuOpen(false)}>
            <Link href="#contact">Contact</Link>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
