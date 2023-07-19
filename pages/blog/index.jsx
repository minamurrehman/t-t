import Image from "next/image";
import React from "react";
import Soon from "../../images/soon.svg";
const Blog = () => {
  return (
    <div className="px-4">
      <Image
        src={Soon}
        alt="Comming Soon"
        width={800}
        height={600}
        className="block mx-auto my-16"
      />
      <h1 className="text-3xl md:text-6xl text-center font-bold my-16 uppercase">
        Coming Soon
      </h1>
    </div>
  );
};

export default Blog;
