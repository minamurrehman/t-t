import React from "react";
import ImageError from "../images/404.svg";
import Image from "next/image";

const Error = () => {
  return (
    <div>
      <Image
        src={ImageError}
        alt="404"
        width={800}
        height={600}
        className="block my-16 mx-auto"
      />
      <p className="text-3xl md:text-4xl font-bold uppercase text-center my-16">
        Page Not Found
      </p>
    </div>
  );
};

export default Error;
