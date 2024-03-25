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

const BlogInfo = ({ job }) => {
  const { asPath } = useRouter();
  const title = job?.jobTitle.concat(" | T& T Marketing");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={job?.jobMeta} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={job?.jobTitle} />
        <meta property="og:description" content={job?.jobMeta} />
        <meta property="og:image" content={job?.image?.url} />
        <meta name="twitter:title" content={job?.jobTitle} />
        <meta name="twitter:description" content={job?.jobMeta} />
        <meta name="twitter:image" content={job?.image?.url} />
        <meta
          name="twitter:card"
          content={job?.jobMeta}
          media={job?.image?.url}
          title={job?.jobTitle}
        />

        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="px-4 mx-auto my-8 max-w-7xl">
        <h1 className="text-5xl text-secondary my-4 underline">
          Gezocht: {job?.jobTitle}({job?.jobMeta})
        </h1>
        <div
          className="mx-auto prose-xl text-white prose-blockquote:text-secondary prose-a:text-secondary prose-code:text-secondary prose-img:mx-auto prose-img:rounded-md prose-headings:font-bold prose-headings:text-secondary prose-strong:text-secondary prose-strong:font-bold"
          dangerouslySetInnerHTML={{ __html: job?.description?.html }}
        />
        <div className="flex gap-4 mx-auto my-6">
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
        query Jobs {
          jobs {
            slug
          }
        }        
        `,
      }),
    }
  ).then((res) => res.json());
  const jobs = data?.data?.jobs;
  // Get the paths we want to create based on posts
  const paths = jobs.map((job) => ({
    params: { slug: job.slug },
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
        query Job($slug: String!) {
          job(where: {slug: $slug},stage: PUBLISHED) {
             jobTitle
            jobMeta
            description {
            html
            }
          }
        }                
        `,
        variables: {
          slug: context.params.slug,
        },
      }),
    }
  ).then((res) => res.json());
  const job = data?.data?.job;

  if (!job) {
    return {
      notFound: true,
    };
  }

  return {
    props: { job },
    revalidate: 300,
  };
}
