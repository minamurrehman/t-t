import React from "react";
import Head from "next/head";
import Carousel from "../../components/Slider/Carousel";

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
      {/*<div className="grid grid-cols-1 gap-10 px-4 mx-auto my-12 max-w-7xl md:grid-cols-2 place-items-center">*/}
      {/*  {blogs.map((blog) => {*/}
      {/*    return <BlogCard blog={blog} />;*/}
      {/*  })}*/}
      {/*</div>*/}
      <div className="my-16">
        <Carousel data={blogs} type="blogs" />
      </div>
    </>
  );
};

export default Blog;

export async function getStaticProps() {
  const data = await fetch(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrkoehe9000008lh97edhsg1/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query Posts {
          posts {
            title
            slug
            content {
              html
            }
            coverImage {
              url
            }
          }
        }        
        `,
      }),
    }
  ).then((res) => res.json());

  return {
    props: { blogs: data?.data?.posts },
    // 30 days muliiplication
    revalidate: 30 * 24 * 60 * 60,
  };
}
