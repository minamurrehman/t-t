import React from "react";
import { api } from "../../utils/api";
import BlogCard from "../../components/BlogCard/BlogCard";
import Head from "next/head";

const Blog = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Blogs | T & T Marketing</title>
        <meta
          name="description"
          content="We are a social media and marketing agency run by people that truly understand how digital marketing works. Our main expertise lies in industries such as gaming, technology, crypto, and esports. Our number one priority is to always deliver the best results to our clients and to ensure no stone is left unturned in achieving their goals. We’re devoted to a limited number of clients and always have someone available to handle any social media emergency. We combine professionalism and efficiency with a good sense of humor and guarantee that working with us will be a blast!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 my-12 px-4 place-items-center">
        {blogs.map((blog) => {
          return <BlogCard blog={blog} />;
        })}
      </div>
    </>
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
    revalidate: 60 * 5,
  };
}
