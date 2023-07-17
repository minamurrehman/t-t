import Image from "next/image";
import React from "react";

const ServiceCard = ({ image, heading, text }) => {
  return (
    <div className="flex gap-4">
      <Image
        src={image}
        alt={`SVG logo for ${text}`}
        width={40}
        height={40}
        className="w-8 md:w-10 h-10 object-contain"
      />
      <p className="italic font-light text-lg md:text-xl">
        <span className="text-secondary not-italic text-xl md:text-2xl font-bold">
          {heading}
        </span>{" "}
        : {text}
      </p>
    </div>
  );
};

export default ServiceCard;
