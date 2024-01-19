import React from "react";
import Image from "next/image";
import Head from "next/head";
import {
  LinkedinShareButton,
  InstapaperShareButton,
  TwitterShareButton,
} from "react-share";

import { BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { useRouter } from "next/router";

const BlogInfo = ({ post }) => {
  const { asPath } = useRouter();
  return (
    <>
      <Head>
        <title>{post?.meta_title} | T& T Marketing</title>
        <meta name="description" content={post?.excerpt} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={post?.title} />
        <meta property="og:description" content={post?.excerpt} />
        <meta property="og:image" content={post?.coverImage?.url} />
        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.excerpt} />
        <meta name="twitter:image" content={post?.coverImage?.url} />
        <meta
          name="twitter:card"
          content={post?.twitter_description}
          media={post?.twitter_image}
          title={post?.twitter_title}
        />

        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="px-4 mx-auto my-8 max-w-7xl">
        <h1 className="text-5xl text-center text-secondary">{post?.title}</h1>
        <Image
          src={post?.coverImage?.url}
          alt={post?.title}
          width={900}
          height={500}
          className="my-8 rounded-md w-full max-w-[900px] mx-auto h-[300px] md:h-[400px] lg:h-[500px] object-cover"
        />
        <div
          className="max-w-[900px] mx-auto prose prose-xl text-white prose-blockquote:text-secondary prose-a:text-secondary prose-code:text-secondary prose-img:mx-auto prose-img:rounded-md prose-headings:font-bold prose-headings:text-secondary prose-strong:text-white prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: post?.content?.html }}
        />
        <div className="flex max-w-4xl gap-4 mx-auto my-6">
          <p className="text-xl text-secondary">Share this post :</p>
          <LinkedinShareButton url={`https://ttmarketing.be${asPath}`}>
            <BsLinkedin size={24} color="#03eeca" />
          </LinkedinShareButton>
          <InstapaperShareButton url={`https://ttmarketing.be${asPath}`}>
            <BsInstagram size={24} color="#03eeca" />
          </InstapaperShareButton>
          <TwitterShareButton url={`https://ttmarketing.be${asPath}`}>
            <BsTwitter size={24} color="#03eeca" />
          </TwitterShareButton>
        </div>
      </div>
    </>
  );
};

export default BlogInfo;

export async function getStaticPaths() {
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
            slug
          }
        }        
        `,
      }),
    }
  ).then((res) => res.json());
  const posts = data?.data?.posts;
  // Get the paths we want to create based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // { fallback: false } means posts not found should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const data = await fetch(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clrkoehe9000008lh97edhsg1/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query MyQuery($slug: String!) {
          post(where: {slug: $slug}) {
            excerpt
            content {
              html
            }
            coverImage {
              url
            }
            title
            updatedAt
          }
        }                
        `,
        variables: {
          slug: context.params.slug,
        },
      }),
    }
  ).then((res) => res.json());
  const post = data?.data?.post;

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 300,
  };
}
