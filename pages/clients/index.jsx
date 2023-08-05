import React from "react";
import styles from "./clients.module.scss";

import Image from "next/image";
import Heet from "../../images/heet.png";
import Kee from "../../images/kee.png";
import Vibes from "../../images/vibes.png";
import Flagship from "../../images/flagship.svg";
import DLC from "../../images/dlc-logo.png";
import Link from "next/link";
import Head from "next/head";
import {clients} from "../../utils/data.json"

const Clients = () => {
  return (
    <>
      <Head>
        <title>Our Clients | T & T Marketing</title>
        <meta
          name="description"
          content="We are a social media and marketing agency run by people that truly understand how digital marketing works. Our main expertise lies in industries such as gaming, technology, crypto, and esports. Our number one priority is to always deliver the best results to our clients and to ensure no stone is left unturned in achieving their goals. We’re devoted to a limited number of clients and always have someone available to handle any social media emergency. We combine professionalism and efficiency with a good sense of humor and guarantee that working with us will be a blast!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>

      <div className={styles.clientInfo}>
        {
          clients?.map(client=>(
              <div>
                <div className={styles.logoImageConatiner} style={{
                    width: client.width,height:client.height
                }}>
                    <Image src={client?.image} alt="Heet Logo" fill className={styles.logoImage}/>
                </div>
                <p className={styles.content}>
                  {client?.desc}
                </p>
                {/*<Link className={`${styles.btn} button`} href={client?.url}>*/}
                {/*    {client?.buttonText}*/}
                {/*</Link>*/}
              </div>
          ))
        }
      </div>
      {/*<div className={styles.clientInfoSecond}>*/}
      {/*  <div>*/}
      {/*    <Image*/}
      {/*      src={DLC}*/}
      {/*      alt="DLC Logo"*/}
      {/*      style={{*/}
      {/*        filter: "revert",*/}
      {/*        width: "200px",*/}
      {/*        height: "200px",*/}
      {/*      }}*/}
      {/*    />*/}
      {/*    <p>*/}
      {/*      DLC SportSystems is a leading provider of cutting-edge sports*/}
      {/*      technology solutions, catering to sports clubs and organizations*/}
      {/*      worldwide. They approached TT Marketing with the goal of*/}
      {/*      establishing a robust online presence through social media platforms*/}
      {/*      (Facebook, Instagram, and LinkedIn), content creation for their*/}
      {/*      website, creating impactful reels and posts, and devising a*/}
      {/*      comprehensive sales strategy to connect with sports clubs.*/}
      {/*    </p>*/}
      {/*    <Link className={`${styles.btn} button`} href="/clients/dlc">*/}
      {/*      Case Study*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default Clients;
