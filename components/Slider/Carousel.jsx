"use client";

import React from "react";
import Slider from "react-slick";
import Keenetic from "../../images/keenetic.png";
import Dlc from "../../images/dlc.png";
import Image from "next/image";
import NextImage from "../../images/next.svg";
import Link from "next/link";
import styles from "./Carousel.module.scss";
import data from "../../utils/data.json";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="block w-10 h-10 absolute rotate-180 left-0 top-1/2 cursor-pointer transform  -translate-y-1/2 ml-2"
      onClick={onClick}
    >
      <Image src={NextImage} alt="Next Arrow" width={40} height={40} />
    </div>
  );
}
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="block w-10 h-10 absolute right-0 top-1/2 cursor-pointer transform -translate-y-1/2 mr-2"
      onClick={onClick}
    >
      <Image src={NextImage} alt="Next Arrow" width={40} height={40} />
    </div>
  );
}

function Carousel() {
  var settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
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
          dots: true,
          arrows: false,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings} className="mt-16 max-w-7xl mx-auto px-4">
      {data?.work?.map((item, index) => (
        <div key={index} className="px-6">
          <Image
            src={item?.image}
            alt="Image"
            width={600}
            height={400}
            className="max-h-[300px] object-contain"
          />
          <p className="mt-4 text-justify p-6">{item?.text}</p>
          <Link
            href="/"
            className="uppercase text-lg text-secondary text-center block my-6"
          ></Link>
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;
