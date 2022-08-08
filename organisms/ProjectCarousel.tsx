import React, { Children, Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { otherProjects } from "../data/ProjectData";
import Link from "next/link";

const SamplePrevArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <div className="prev-arr" onClick={onClick}>
      <Image
        src="/vectors/left-button.svg"
        height={39}
        width={39}
        alt="button"
      />
    </div>
  );
};
const SampleNextArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <div className="next-arr" onClick={onClick}>
      <Image
        src="/vectors/right-button.svg"
        height={39}
        width={39}
        alt="button"
      />
    </div>
  );
};

export default function ProjectCarousel() {
  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    draggable: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ marginTop: "4rem", position: "relative" }}>
      <h2 className="text">Other Noteworthy Projects</h2>
      <div>
        <Slider {...settings}>
          {otherProjects.map((item, itemIndex) => (
            <div className="project-slide">
              <div className="card" key={`card-${itemIndex}`}>
                <div className="slide-img">
                  <img src={`${item.Image}`} alt="" />
                </div>
                <a href={item.link} target="_blank" className="project-info">
                  <div className="desc">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <div className="project-meta">
                    {item.tags?.map((tag, i) => (
                      <span key={i} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
