import Image from "next/image";
import React from "react";
import { HeaderData } from "../data/HeaderData";
import NavBar from "../components/NavBar";

const HeaderSection = () => {
  return (
    <div>
        <NavBar />
      {/* <header className="py-24 flex flex-col items-center ">
        <div className="bg-[#B4A9F6] rounded-full h-[5rem] w-[5rem] flex items-center justify-center mb-5">
          <Image src="/vectors/avatar.svg" width={72} height={72} />
        </div>
        <h5>Hello, I’m</h5>
        <h3 className="text-6xl bebas-font uppercase">{HeaderData.name}</h3>
        <h3 className="text-6xl text-[#B9B9B9] bebas-font uppercase">
          {HeaderData.jobTitle}
        </h3>
      </header> */}
    </div>
  );
};

export default HeaderSection;