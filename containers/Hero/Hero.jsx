import Image from 'next/image'
import React from 'react'
import styles from './Hero.module.scss'
import HeroImage from '../../images/hero.png'
import Link from 'next/link'

const Hero = () => {
  return (
    <div
      style={{
        position: 'static',
      }}
    >
      <div className={styles.hero}>
        <div className={styles.heroImage}>
          <div></div>
          <div>
            <Image src={HeroImage} alt='Hero Logo' />
          </div>
          <div className={styles.image}></div>
        </div>

        <div className={styles.heroInfo}>
          <p>
            WE ARE A FULL SERVICE SOCIAL MEDIA AND MARKETING AGENCY COMPANY
            FOCUSED ON GROWTH AND INNOVATION.
          </p>
          <p>
            WITH OUR EXPERTISE IN AND LOVE FOR SOCIAL MEDIA AND MARKETING, WE
            ALWAYS GO THE EXTRA MILE TO ACHIEVE THE BEST RESULTS FOR OUR
            CLIENTS.
          </p>
          <Link href='/' className={styles.button}>
            View more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
