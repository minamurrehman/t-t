import Image from "next/image";
import React from "react";
import moment from "moment/moment";
import { MdOutlineTimer } from "react-icons/md";
import Link from "next/link";
import readingTime from "reading-time";
const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-2xl overflow-hidden max-w-[98%] mx-6 md:max-w-[350px] lg:max-w-[450px] xl:max-w-[530px] sm:mx-auto border-2 border-secondary">
      <Image
        src={blog?.coverImage?.url}
        alt={blog?.title}
        width={530}
        height={360}
        className="rounded-t-lg max-h-[300px] md:h-[360px] object-cover"
      />
      <div className="px-4 py-4">
        <div className="flex justify-between gap-2 text-xl text-secondary">
          <p>{moment(blog?.updatedAt).format("DD MMMM YYYY")}</p>
          <p className="flex gap-1">
            <MdOutlineTimer size={24} color="#03eeca" />
            <span>{readingTime(blog?.content?.html).text}</span>
          </p>
        </div>
        <div className="px-2 text-center md:px-8">
          <h1 className="text-3xl font-[700] text-center text-secondary my-6 line-clamp-4">
            {blog?.title}
          </h1>
          <p className="line-clamp-3">{blog?.excerpt}</p>
          <Link
            href={`/blog/${blog?.slug}`}
            className="block px-8 py-2 mx-auto my-4 text-2xl text-black duration-500 w-max bg-secondary rounded-xl hover:scale-105"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
