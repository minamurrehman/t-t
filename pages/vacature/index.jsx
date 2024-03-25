import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import Head from "next/head";

const Vacature = ({ jobs }) => {
  return (
    <div className="my-8">
      <Head>
        <title>Vacature</title>
      </Head>
      {jobs?.map((job) => (
        <JobCard key={job?.slug} job={job} />
      ))}
    </div>
  );
};

export default Vacature;

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
            query Jobs {
                jobs {
                    jobTitle
                    jobMeta
                    image {
                        altText
                        url
                    }
                    slug
                }
            }        
        `,
      }),
    }
  ).then((res) => res.json());
  return {
    props: { jobs: data?.data?.jobs },
    // 30 days muliiplication
    revalidate: 30 * 24 * 60 * 60,
  };
}
