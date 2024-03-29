import React, { useEffect } from "react";
import { HeaderData } from "../data/HeaderData";
import Image from "next/image";
import gsap from "gsap";

const Header = () => {
  useEffect(() => {
    const headerTl = gsap.timeline({ delay: 1.5 });
    headerTl.fromTo(
      ".header",
      {
        opacity: 0,
        yPercent: 50,
        stagger: 0.1,
      },
      { opacity: 1, yPercent: 0 }
    );
  }, []);
  return (
    <header className="mt-12 md:mt-24 flex flex-col items-center header md:h-80 ">
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
  );
};

export default Header;
