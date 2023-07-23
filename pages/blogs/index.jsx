import React from "react";
import { api } from "../../utils/api";
import BlogCard from "../../components/BlogCard/BlogCard";

const Blog = ({ blogs }) => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 my-12 px-4 place-items-center">
      {blogs.map((blog) => {
        return <BlogCard blog={blog} />;
      })}
    </div>
  );
};

export default Blog;

export async function getStaticProps() {
  const blogs = await api.posts
    .browse({
      limit: "6",
    })
    .catch((err) => {
      console.error(err);
    });
  return {
    props: { blogs },
  };
}
