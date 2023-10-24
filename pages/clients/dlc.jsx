import Image from "next/image";
import React from "react";
import DLCLogo from "../../images/dlc-logo.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Head from "next/head";

const Dlc = () => {
  return (
    <>
      <Head>
        <title>DLC Case Study | T & T Marketing</title>
        <meta
          name="description"
          content="DLC SportSystems is a leading provider of cutting-edge sports technology solutions, catering to sports clubs and organizations worldwide. They approached TT Marketing with the goal of establishing a robust online presence through social media platforms (Facebook, Instagram, and LinkedIn), content creation for their website, creating impactful reels and posts, and devising a comprehensive sales strategy to connect with sports clubs.."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="max-w-7xl mx-auto my-16 ">
        {/* top bar  */}
        <div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-3 gap-6 md:justify-items-end p-4 bg-[url('/led-dlc.png')] ">
          <div className="flex flex-col gap-6 md:col-span-2 max-w-[600px] justify-self-start text-center mx-auto md:mx-0">
            <h1 className="text-2xl md:text-5xl font-bold max-w-[500px] mx-auto uppercase">
              Total Marketing Strategy
            </h1>
            <p className="text-xl md:text-3xl uppercase">
              FROM SOCIALS TO SEA, SEO, CONTENT CREATION, SALES STRATEGY TO
              SALES EXECUTION AND EFFECTIVE SALES
            </p>
          </div>

          <div className="relative h-64 w-64 block">
            <Image src={DLCLogo} alt="DLC logo" fill />
          </div>
        </div>

        {/* bottom part  */}

        <div className="flex flex-col-reverse md:flex-row gap-6">
          {/* sidebar  */}
          <div className="flex flex-col gap-6 w-full md:w-72 flex-shrink-0 bg-secondary p-4 md:p-2 text-black">
            <div>
              <h2 className="text-black uppercase font-bold tracking-wider">
                Results
              </h2>
              <p>
                Within two months, DLC SportSystems' social media reach and
                engagement witnessed a remarkable increase:
              </p>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="flex justify-between gap-4 items-center">
                <BsFacebook size={44} className="flex-shrink-0 w-16" />
                <p>
                  Total page likes increased by 150%, and post reach grew by
                  180%.
                </p>
              </div>
              <div className="flex justify-between gap-4 items-center">
                <p>
                  Follower count surged by 200%, and reels achieved an average
                  of 5,000 views per video.
                </p>
                <BsInstagram size={44} className="flex-shrink-0 w-16" />
              </div>
              <div className="flex justify-between gap-4 items-center">
                <BsLinkedin size={44} className="flex-shrink-0 w-16" />
                <p>
                  Company followers tripled, and content engagement increased by
                  250%.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-black uppercase font-bold tracking-wider">
                Website performance
              </h2>
              <p>
                The revamped website experienced a surge in traffic, with page
                views increasing by 120%, and bounce rates decreasing by 40%.
                Visitors spent more time on the website, exploring the range of
                products and services offered.
              </p>
            </div>
            <div>
              <h2 className="text-black uppercase font-bold tracking-wider">
                Sales Success
              </h2>
              <p>
                Through targeted outreach, TT Marketing successfully contacted
                1,000 sports clubs, resulting in a 20% response rate. Several
                clubs expressed interest in DLC SportSystems' solutions, with
                50% of contacted clubs converting into customers
              </p>
            </div>
            <div>
              <h2 className="text-black uppercase font-bold tracking-wider">
                Seo achievement
              </h2>
              <p>
                T&T Marketing's content strategy, coupled with website
                optimization, led to DLC SportSystems ranking on the front page
                of Google for the highly competitive keyword "innovative sports
                technology solutions".
              </p>
            </div>
          </div>
          <div className="my-4 flex flex-col gap-4 px-4">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl md:text-2xl">Client Overview</p>
              <p>
                DLC SportSystems is a leading provider of cutting-edge sports
                technology solutions, catering to sports clubs and organizations
                worldwide. They approached TT Marketing with the goal of
                establishing a robust online presence through social media
                platforms (Facebook, Instagram, and LinkedIn), content creation
                for their website, creating impactful reels and posts, and
                devising a comprehensive sales strategy to connect with sports
                clubs. They aimed to achieve this within a tight timeline of 3
                months.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl md:text-2xl">Challenges</p>
              <p>
                <span className="font-bold">Limited online visibility:</span>{" "}
                DLC SportSystems faced challenges in standing out among
                competitors due to a relatively modest online presence. <br />
                <span className="font-bold">Limited social media reach:</span>
                The company's social media channels lacked consistent and
                engaging content, resulting in limited reach and engagement. •
                Ineffective sales approach: The existing sales strategy was not
                reaching the target audience effectively, resulting in a low
                response rate from potential sports clubs.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl md:text-2xl">Solutions</p>
              <p className="flex flex-col gap-2">
                <span className="font-bold">Social Media Optimization:</span> TT
                Marketing conducted a thorough analysis of DLC SportSystems'
                target audience and competitors to devise an effective social
                media strategy. The team then optimized and set up engaging
                Facebook, Instagram, and LinkedIn profiles that aligned with the
                brand's identity. The strategy emphasized regular posting,
                showcasing DLC's sports technology innovations, and utilizing
                visual content, such as eyecatching reels and posts, to maximize
                engagement. <br />
                <span className="font-bold">
                  Content Creation and Website Enhancement:
                </span>{" "}
                TT Marketing collaborated with DLC SportSystems to revamp their
                website's content, ensuring it conveyed their unique value
                proposition and highlighted the benefits of their products.
                Engaging and informative blog posts, product descriptions, and
                success stories were crafted to captivate the target audience
                and showcase DLC's expertise in the sports technology industry.{" "}
                <br />
                <span className="font-bold">Social Media Management:</span> TT
                Marketing took charge of content creation and management across
                all social media platforms. By employing a mix of creative
                visuals, engaging captions, and strategic use of hashtags, the
                team ensured maximum exposure for DLC SportSystems' products and
                services. Regular updates and interactions with followers
                bolstered brand loyalty and encouraged user-generated content.{" "}
                <br />
                <span className="font-bold">
                  Sales Strategy and Execution:
                </span>{" "}
                The sales strategy was designed to target sports clubs that
                could benefit from DLC SportSystems' innovative solutions. TT
                Marketing deployed personalized outreach campaigns through email
                marketing and direct messages, emphasizing the unique value
                proposition and highlighting successful case studies. By
                nurturing leads and building relationships, the team aimed to
                convert potential sports clubs into loyal customers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl md:text-2xl">Conclusion</p>
              <p>
                T&T Marketing's dynamic approach to social media management,
                content creation, and sales strategy execution has transformed
                DLC SportSystems' online presence, significantly increasing
                engagement and sales within a tight timeframe. By leveraging
                social media platforms, optimizing website content, and
                implementing targeted sales campaigns, TT Marketing successfully
                positioned DLC SportSystems as a prominent player in the sports
                technology industry, propelling them to the front page of Google
                for a high-impact keyword. The collaboration between TT
                Marketing and DLC SportSystems serves as a testament to the
                power of a comprehensive and wellexecuted digital marketing
                strategy in achieving business growth and success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dlc;
