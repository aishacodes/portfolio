import React from "react";
import { SVGProps } from "react";

const MenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="15"
      viewBox="0 0 18 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 13.25H17M1 1.25H17H1ZM1 7.25H17H1Z"
        stroke={props.stroke ?? "#2E2E2E"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
