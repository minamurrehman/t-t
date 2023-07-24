import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import data from "../../../utils/data.json";
import styles from "./clientInfo.module.scss";
import Head from "next/head";

const ClientInfo = () => {
  const router = useRouter();
  const { name } = router.query;
  const val = data[`${name}`];

  return (
    <>
      <Head>
        <title>{name?.toUpperCase()} | Clients | T & T Marketing</title>
        <meta
          name="description"
          content="We are a social media and marketing agency run by people that truly understand how digital marketing works. Our main expertise lies in industries such as gaming, technology, crypto, and esports. Our number one priority is to always deliver the best results to our clients and to ensure no stone is left unturned in achieving their goals. We’re devoted to a limited number of clients and always have someone available to handle any social media emergency. We combine professionalism and efficiency with a good sense of humor and guarantee that working with us will be a blast!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-black.svg" />
      </Head>

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
          paddingBottom: "4rem",
        }}
      >
        <div className={styles.imageContainer}>
          <Image
            quality={100}
            src={val?.image}
            alt={val?.title}
            width={1500}
            height={660}
          />
          <div className={styles.imageInfo}>
            <p className={styles.imageTitle}>{val?.title}</p>
            <p className={styles.imageLogo}>{val?.subtitle}</p>
          </div>
        </div>

        {/* Information  */}

        <div className={styles.clientInfo}>
          <div>
            {val?.options?.map((option, i) => (
              <div key={i}>
                <p
                  style={{
                    color: val?.color,
                  }}
                >
                  {option?.title}
                </p>
                <p style={{ color: "black" }}>{option?.desc}</p>
              </div>
            ))}

            <div
              style={{
                border: `5px solid ${val?.color}`,
              }}
            >
              {val?.data?.map((option, i) => (
                <div key={i} style={{ color: "black" }}>
                  <p style={{ color: val?.color }}>{option?.amount}</p>

                  <p style={{ textTransform: "none" }}>{option?.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <p
                style={{
                  color: val?.color,
                }}
              >
                STRATEGIES
              </p>
              <div>
                {val?.strategies?.map((option, i) => (
                  <div key={i}>
                    <p
                      style={{
                        color: val?.color,
                      }}
                    >
                      {option?.title}
                    </p>
                    <p style={{ color: "black" }}>{option?.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.example}>
              <p
                style={{
                  color: val?.color,
                }}
              >
                Example Posts
              </p>
              <div>
                {val?.example?.map((ex, i) => (
                  <img key={i} src={ex?.image} alt={ex?.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientInfo;
