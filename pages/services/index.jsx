import Image from "next/image";
import React from "react";
import ServiceImage from "../../images/services.svg";
import Service1 from "../../images/service1.png";
import Service2 from "../../images/service2.png";
import Button from "../../components/Button/Button";
import data from "../../utils/data.json";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Head from "next/head";
const Services = () => {
  return (
    <>
      <Head>
        <title>Services | T & T Marketing</title>
        <meta
          name="description"
          content="We are a social media and marketing agency run by people that truly understand how digital marketing works. Our main expertise lies in industries such as gaming, technology, crypto, and esports. Our number one priority is to always deliver the best results to our clients and to ensure no stone is left unturned in achieving their goals. We’re devoted to a limited number of clients and always have someone available to handle any social media emergency. We combine professionalism and efficiency with a good sense of humor and guarantee that working with us will be a blast!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>

      <div className="max-w-7xl mx-auto px-4">
        <Image
          className="mx-auto"
          src={ServiceImage}
          alt="Service Image"
          width={800}
          height={800}
        />
        <h1 className="text-5xl md:text-8xl font-bold text-center pt-0 mt-0 leading-5 block h-16">
          Services
        </h1>

        {/* main section  */}

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col gap-4 md:mt-12 col-span-2">
            {data?.services?.map((service) => (
              <ServiceCard
                image={service?.logo}
                heading={service?.heading}
                text={service?.text}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src={Service1}
              alt="Service Image"
              width={400}
              height={400}
            />
            <Image
              src={Service2}
              alt="Service Image"
              width={400}
              height={400}
              className="hidden md:block"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 justify-center my-16 md:my-24">
          <p className="text-3xl md:text-4xl text-center max-w-4xl mx-auto">
            Ready to take your marketing to the next level? Contact us today and
            let's make your brand shine brighter than ever before!
          </p>
          <Button
            href="mailto:tim@ttmarketing.be"
            title="Let's talk"
            className="w-max mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Services;
