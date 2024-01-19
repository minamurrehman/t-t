import Image from "next/image";
import React from "react";
import HETLogo from "../../images/leerstadion_logo_white.svg";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import Head from "next/head";

const Dlc = () => {
  return (
    <>
      <Head>
        <title>Het Leerstadion Case Study | T & T Marketing</title>
        <meta
          name="description"
          content="Het Leerstadion, an educational
          services provider, sought to enhance
          its digital presence and reach a wider
          audience. Collaborating with T&T
          Marketing, they embarked on an
          ambitious digital marketing campaign
          to revamp their brand, engage with
          parents, and forge partnerships with
          professionals in the educational sector.
          This case study delves into the
          strategies and tactics implemented by
          T&T Marketing, showcasing how Het
          Leerstadion
          achieved
          remarkable
          results through digital transformation."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>
      <div className="mx-auto my-16 max-w-7xl ">
        {/* top bar  */}
        <div className="grid grid-cols-1 justify-items-center items-center md:grid-cols-3 gap-6 md:justify-items-end p-4 bg-[url('/led-dlc.png')] ">
          <div className="flex flex-col gap-6 md:col-span-2 max-w-[600px] justify-self-start text-center mx-auto md:mx-0">
            <h1 className="text-2xl md:text-5xl font-bold max-w-[500px] mx-auto uppercase">
              Het Leerstadion Strategy
            </h1>
            <p className="text-xl uppercase md:text-3xl">
              ransforming Educational Services with Digital Marketing
            </p>
          </div>

          <div className="relative block w-64 h-64">
            <Image src={HETLogo} alt="DLC logo" fill />
          </div>
        </div>

        {/* bottom part  */}

        <div className="flex flex-col-reverse gap-6 md:flex-row">
          {/* sidebar  */}
          <div className="flex flex-col flex-shrink-0 w-full gap-6 p-4 text-black md:w-72 bg-secondary md:p-2">
            <div>
              <h2 className="font-bold tracking-wider text-black uppercase">
                Results
              </h2>
              <p>
                Our hard work paid off with a 70% increase in website traffic, a
                50% increase in conversion rate, and an impressive 120% sales
                boost in just six months.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <div className="">
                <div>
                  Website traffic increased
                  <div className="block w-full h-4 my-2 bg-black">
                    <div className="flex items-center justify-center w-[70%] h-full bg-white">
                      70%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  Conversion rate
                  <div className="block w-full h-4 my-2 bg-black">
                    <div className="flex items-center justify-center w-[50%] h-full bg-white">
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  Overall sales
                  <div className="block w-full h-4 my-2 bg-black">
                    <div className="flex items-center justify-center w-[100%] h-full bg-white">
                      120%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 my-4">
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Client Overview</p>
              <p>
                Het Leerstadion, an educational services provider, sought to
                enhance its digital presence and reach a wider audience.
                Collaborating with T&T Marketing, they embarked on an ambitious
                digital marketing campaign to revamp their brand, engage with
                parents, and forge partnerships with professionals in the
                educational sector. This case study delves into the strategies
                and tactics implemented by T&T Marketing, showcasing how Het
                Leerstadion achieved remarkable results through digital
                transformation.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Challenges</p>
              <div className="flex flex-col gap-2">
                <span>Limited digital presence. </span>
                <span>
                  A need to connect with parents seeking educational support.{" "}
                </span>
                <span>
                  Establishing partnerships with educational professionals.{" "}
                </span>
                <span>Improving the online visibility of Het Leerstadion.</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">
                Strategy and implementation
              </p>
              <div className="flex flex-col gap-2">
                <p>T&T Marketing employed a approach to address challenges.</p>
                <span className="font-bold">Social Media :</span>
                <p>
                  T&T Marketing revamped Het Leerstadion's social media profiles
                  by creating compelling logos, banners, and graphics. Weekly
                  posts were strategically curated to engage the audience and
                  promote the brand.
                </p>
                <ul>
                  <li>
                    <span className="font-bold">Target Audience : </span>
                    Parents, schools, hospitals, students.
                  </li>
                  <li>
                    <span className="font-bold">Low Traffic : </span>
                    We optimized the website, enriching it with SEO tags and the
                    Facebook pixel for better performance. Blog posts were added
                    to boost content relevance and improve SEO ranking.
                  </li>
                  <li>
                    <span className="font-bold">Conversion : </span>
                    <br />
                    <span className="font-bold">Email Campaigns:</span> Tailored
                    email campaigns targeted parents, logopedists, and
                    educational professionals. The objective was to establish a
                    connection with the audience, drive reviews, and forge
                    partnerships.
                  </li>
                  <li>
                    <span className="font-bold">Email Campaigns: </span>{" "}
                    Tailored email campaigns targeted parents, logopedists, and
                    educational professionals. The objective was to establish a
                    connection with the audience, drive reviews, and forge
                    partnerships.
                  </li>
                </ul>
                <br />
                <span className="font-bold">
                  Google Business Page Optimization:
                </span>
                <p>
                  The Google Business page was updated with new images and
                  optimized for search, ensuring visibility in local searches.
                </p>
                <span className="font-bold">LinkedIn Presence :</span>
                <p>
                  A LinkedIn page for Het Leerstadion was established, complete
                  with weekly posts and links to relevant articles. The page
                  grew to 101 followers within a month.
                </p>
                <span className="font-bold">Advertising Campaigns :</span>
                <p>
                  T&T Marketing initiated advertising campaigns through Facebook
                  and Google to reach a wider audience.
                </p>
                <span className="font-bold">Media Outreach :</span>
                <p>
                  An article was drafted and published on HLN, a leading news
                  website, to further increase the visibility of Het
                  Leerstadion.
                </p>
                <span className="font-bold">LinkedIn Outreach :</span>
                <p>
                  Personalized outreach on LinkedIn was conducted to connect
                  with professionals in the educational field.
                </p>
                <p className="text-xl font-bold md:text-2xl">
                  Their Expectation :
                </p>
                <ul>
                  <li>
                    A significant increase in social media engagement and
                    followers.
                  </li>
                  <li>
                    The website saw improved SEO rankings and increased organic
                    traffic.
                  </li>
                  <li>
                    The email campaigns resulted in enhanced reviews and
                    successful partnership endeavors.
                  </li>
                  <li>
                    Active participation in Facebook groups led to greater brand
                    recognition and potential customers.
                  </li>
                  <li>
                    Effective advertising campaigns attracted a wider audience.
                  </li>
                  <li>
                    The LinkedIn presence expanded rapidly with over 100
                    followers in a month.
                  </li>
                  <li>
                    The media outreach article on HLN garnered additional
                    attention.
                  </li>
                  <li>
                    LinkedIn outreach efforts led to the establishment of
                    valuable professional connections.
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-bold md:text-2xl">Solutions</p>
              <div className="flex flex-col gap-2">
                <p>
                  The collaboration between Het Leerstadion and T&T Marketing
                  exemplifies the power of digital marketing in revitalizing a
                  brand's presence. Through a well- rounded strategy
                  encompassing social media optimization, content creation,
                  email campaigns, and more, Het Leerstadion succeeded in
                  reaching a wider audience.
                </p>
                <span className="font-bold">Landing page creation :</span>
                <p>
                  A dedicated landing page was developed to direct and convert
                  website traffic more effectively.
                </p>
                <br />
                <span className="font-bold">Branding Guidelines :</span>
                <p>
                  Comprehensive branding guidelines were established to maintain
                  brand consistency.
                </p>
                <br />
                <span className="font-bold">Social Media Management:</span>
                <p>
                  T&T Marketing revamped Het Leerstadion's social media profiles
                  by creating compelling logos, banners, and graphics. Weekly
                  posts were strategically curated to engage the audience and
                  promote the brand.
                </p>
                <br />
                <span className="font-bold">SEO Optimization:</span>
                <p>
                  By strategically using keywords, optimizing on- page elements,
                  and building high-quality backlinks, you can boost your
                  website's rankings and attract more organic traffic. SEO
                  optimization is crucial for businesses and websites looking to
                  thrive in the competitive online landscape. It's not just
                  about ranking higher; it's about delivering a better user
                  experience and providing valuable content to your audience.
                  Stay ahead of the curve by embracing SEO optimization and
                  reaping the rewards of increased visibility and web traffic.
                </p>
                <span className="font-bold">Targeted PPC :</span>
                <ul>
                  <li>
                    A significant increase in social media engagement and
                    followers.
                  </li>
                  <li>
                    The website saw improved SEO rankings and increased organic
                    traffic.
                  </li>
                  <li>
                    The email campaigns resulted in enhanced reviews and
                    successful partnership endeavors.
                  </li>
                  <li>
                    Active participation in Facebook groups led to greater brand
                    recognition and potential customers.
                  </li>
                  <li>
                    Effective advertising campaigns attracted a wider audience.
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dlc;
