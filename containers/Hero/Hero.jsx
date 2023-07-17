import Image from "next/image";
import React from "react";
import styles from "./Hero.module.scss";
import HeroImage from "../../images/hero.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <Image
        src={HeroImage}
        alt="Hero image we are marketing agency"
        width={1400}
        height={600}
        className={styles.heroImage}
      />
    </div>
  );
};

export default Hero;
