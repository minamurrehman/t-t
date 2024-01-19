import Image from "next/image";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Head from "next/head";
import { useRouter } from "next/router";

const KomOpTegen = () => {
  return (
    <>
      <Head>
        <title>Kom Op Tegen Kanker Case Study | T & T Marketing</title>
        <meta
          name="description"
          content="Kom Op Tegen Kanker, a leading cancer research and support organization, partnered with a marketing
consultancy firm to expand its reach within the gaming community and run successful campaigns with
influencers. The objective was to engage the gaming audience, raise awareness about cancer prevention, and
drive donations for cancer research.
"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="mx-auto my-16 max-w-7xl ">
        {/* top bar  */}
        <div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-3 gap-6 md:justify-items-end p-4 bg-[url('/kom-op-tegen.webp')] bg-no-repeat bg-cover bg-[center_bottom_80%]">
          <div className="flex flex-col gap-6 md:col-span-2 max-w-[600px] justify-self-start text-center mx-auto md:mx-0">
            <h1 className="text-2xl md:text-5xl font-bold max-w-[500px] mx-auto uppercase">
              Total Marketing Strategy
            </h1>
            <p className="text-xl uppercase md:text-3xl">
              FROM SOCIALS TO SEA, SEO, CONTENT CREATION, SALES STRATEGY TO
              SALES EXECUTION AND EFFECTIVE SALES
            </p>
          </div>

          <div className="relative block object-contain w-64 h-64">
            <Image
              src="/kom-op-tegen-logo.png"
              alt="Kom Op Tegen Kanker logo"
              fill
            />
          </div>
        </div>

        {/* bottom part  */}

        <div className="flex flex-col-reverse gap-6 md:flex-row">
          {/* sidebar  */}
          <div className="flex flex-col justify-around flex-shrink-0 w-full p-4 text-black md:w-72 bg-secondary md:p-2">
            <div>
              <h2 className="font-bold tracking-wider text-black uppercase">
                Increased Awareness
              </h2>
              <p>
                The campaigns reached millions of gamers, raising awareness
                about cancer prevention and Kom Op Tegen Kanker's work.
              </p>
            </div>
            <div>
              <h2 className="font-bold tracking-wider text-black uppercase">
                Engagement Surge
              </h2>
              <p>
                The interactive charity gaming events and live streams generated
                high engagement rates, with active participation from the gaming
                community.
              </p>
            </div>
            <div>
              <h2 className="font-bold tracking-wider text-black uppercase">
                Duration Uplift
              </h2>
              <p>
                The gaming-focused campaigns resulted in a significant increase
                in donations, allowing Kom Op Tegen Kanker to fund crucial
                cancer research projects.
              </p>
            </div>
            <div>
              <h2 className="font-bold tracking-wider text-black uppercase">
                Brand Affinity
              </h2>
              <p>
                The influencer partnerships and authentic content established a
                strong emotional connection with the gaming audience, increasing
                brand affinity for Kom Op Tegen Kanker.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 my-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Client Overview</p>
              <p>
                Kom Op Tegen Kanker, a leading cancer research and support
                organization, partnered with a marketing consultancy firm to
                expand its reach within the gaming community and run successful
                campaigns with influencers. The objective was to engage the
                gaming audience, raise awareness about cancer prevention, and
                drive donations for cancer research.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Challenges</p>
              <p>
                The gaming community, predominantly consisting of Generation Z
                and Millennials, presents a unique challenge for traditional
                marketing strategies. The consultancy needed to develop an
                approach that resonated with this tech-savvy and socially
                conscious audience, leveraging influencers and gaming platforms
                effectively.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Strategy</p>
              <p className="gap-2">
                <span className="font-bold">Influencer Identification:</span>{" "}
                The consultancy team conducted thorough research to identify
                gaming influencers whose content aligned with Kom Op Tegen
                Kanker's values. They focused on both well-known gaming
                influencers and rising stars in the gaming community.
                <br />
                <span className="font-bold">Authentic Partnerships:</span>{" "}
                Instead of pursuing one-off endorsements, the consultancy team
                forged authentic long-term partnerships with influencers who had
                a personal connection to cancer stories or research causes.{" "}
                <br />
                <span className="font-bold">Customized Campaigns:</span> Each
                influencer campaign was tailored to the influencer's unique
                style and audience. From live gaming streams to interactive
                charity events, the team ensured the content was engaging and
                informative. <br />
                <span className="font-bold">
                  Integration with Gaming Platforms:
                </span>{" "}
                The team utilized various gaming platforms like Twitch, YouTube
                Gaming, and gaming-specific social media channels to maximize
                the campaigns' exposure among gamers.
                <span className="font-bold">
                  Interactive Charity Events:
                </span>{" "}
                Kom Op Tegen Kanker organized interactive charity gaming events,
                where influencers and their audiences played games together to
                raise funds. Viewers were encouraged to donate during the
                livestreams.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Execution</p>
              <p className="gap-2">
                <span className="font-bold">Influencer Onboarding:</span>{" "}
                Influencers were introduced to Kom Op Tegen Kanker's mission and
                provided with relevant information to create authentic content
                aligned with their gaming style.
                <br />
                <span className="font-bold">Social Media Campaigns:</span>{" "}
                Customized social media campaigns showcased personal stories of
                cancer survivors, facts about cancer prevention, and encouraged
                users to share their own experiences using specific hashtags.{" "}
                <br />
                <span className="font-bold">
                  Live Streams and Tournaments:{" "}
                </span>{" "}
                Gaming influencers hosted charity gaming marathons and
                tournaments, with a portion of the proceeds going to Kom Op
                Tegen Kanker. <br />
                <span className="font-bold">In-Game Activations:</span> The
                consultancy team worked with game developers to introduce
                in-game activations, where players could purchase virtual items
                with a percentage of the sales donated to the cause.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Conclusion</p>
              <p>
                By combining the power of gaming influencers and tailored
                content, Kom Op Tegen Kanker successfully engaged the gaming
                community and raised significant funds for cancer research. The
                marketing consultancy's strategic approach enabled them to
                connect with a younger, digitally savvy audience, leveraging
                influencers as authentic advocates for the cause. The success of
                these campaigns highlighted the importance of innovative and
                targeted marketing strategies in reaching diverse audiences and
                driving meaningful impact for a cause as crucial as cancer
                research and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KomOpTegen;

export async function getServerSideProps() {
  // navigate back to home page
  return {
    notFound: true,
  };
}
