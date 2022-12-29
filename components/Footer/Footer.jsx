import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <p>T & T Marketing</p>
          <ul>
            <Link href='/about'>About Us</Link>
            <Link href='/clients'>Our Clients</Link>
          </ul>
        </div>
        <div>
          <p>Contact Us</p>
          <ul>
            <Link href='mailto:inaam@gmail.com'>Send an e-mail</Link>
            <Link href='https://calendly.com/timbuysse1985'>
              Book a Meeting
            </Link>
          </ul>
        </div>
        <div>
          <p>Social</p>
          <ul>
            <Link href='https://www.instagram.com/marketing.tnt/'>
              Instagram
            </Link>
            <Link href='https://www.linkedin.com/company/tntmarketing/'>
              Linkedin
            </Link>
          </ul>
        </div>
      </div>
      <p>&copy; 2022 T & T Marketing</p>
    </footer>
  )
}

export default Footer
