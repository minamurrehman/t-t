import React from "react";
import { api } from "../../utils/api";
import Image from "next/image";
import Head from "next/head";

const BlogInfo = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post?.meta_title}| T& T Marketing</title>
        <meta name="description" content={post?.meta_description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={post?.og_title} />
        <meta property="og:description" content={post?.og_description} />
        <meta property="og:image" content={post?.og_image} />
        <meta name="twitter:title" content={post?.twitter_title} />
        <meta name="twitter:description" content={post?.twitter_description} />
        <meta name="twitter:image" content={post?.twitter_image} />
        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="my-8 max-w-7xl mx-auto px-4">
        <h1 className="text-5xl text-center text-secondary">{post?.title}</h1>
        <Image
          src={post?.feature_image}
          alt={post?.feature_image_alt}
          width={900}
          height={500}
          className="my-8 rounded-md w-full max-w-[900px] mx-auto h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
        <div
          className="max-w-[900px] mx-auto prose prose-xl text-white prose-blockquote:text-secondary prose-a:text-secondary prose-code:text-secondary prose-img:mx-auto prose-img:rounded-md"
          dangerouslySetInnerHTML={{ __html: post?.html }}
        />
      </div>
    </>
  );
};

export default BlogInfo;

export async function getStaticPaths() {
  const posts = await api.posts.browse().catch((err) => {
    console.error(err);
  });

  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const post = await api.posts
    .read({
      slug: context?.params?.slug,
    })
    .catch((err) => {
      console.error(err);
    });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
  };
}
