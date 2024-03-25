import Image from "next/image";
import React from "react";
import Link from "next/link";
const JobCard = ({ job }) => {
  return (
    <div className="rounded-2xl overflow-hidden sm:max-w-[350px] mx-6 md:max-w-[350px] xl:max-w-[400px] sm:mx-auto border-2 border-secondary">
      <div className="relative w-full h-72">
        <Image
          src={job?.image?.url}
          alt={job?.image?.altText}
          fill
          className="absolute rounded-t-lg "
        />
      </div>
      <div className="px-4 py-4">
        <div className="px-2 text-center md:px-4">
          <h1 className="text-3xl font-[700] text-center text-secondary my-6 line-clamp-4">
            {job?.jobTitle}
          </h1>
          <p className="line-clamp-3 text-secondary text-2xl">
            ({job?.jobMeta})
          </p>
          <Link
            href={`/vacature/${job?.slug}`}
            className="block px-8 py-2 mx-auto my-4 text-2xl text-black duration-500 w-max bg-secondary rounded-xl hover:scale-105"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
