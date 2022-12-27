import React from 'react'
import styles from './Navbar.module.scss'
import Image from 'next/image'

import Logo from '../../images/logo.png'
import Instagram from '../../images/instagram.png'
import Linkedin from '../../images/linkedin.png'

import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

import Link from 'next/link'

import data from '../../utils/data.json'

const Navbar = ({ active }) => {
  const [show, setShow] = React.useState(false)
  return (
    <nav className={styles.navWrapper}>
      {show ? (
        <div className={styles.mobileMenu}>
          <div className={styles.topRow}>
            <Image src={Logo} alt='Logo' />
            <AiOutlineClose
              size={38}
              color='white'
              onClick={() => setShow(false)}
            />
          </div>

          <div className={styles.navMenus}>
            {data?.menu?.map((item, index) => (
              <Link key={index} href={item?.url}>
                {item?.title}
              </Link>
            ))}
          </div>
          <div className={styles.mobileSocial}>
            <Link href='/contact' className='button'>
              Contact Us
            </Link>
            <div>
              <BsLinkedin size={30} color='#03EECA' />
              <BsInstagram size={30} color='#03EECA' />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nav}>
          <Image src={Logo} alt='Logo' />
          {/* Nav Links  */}
          <div className={styles.hamburger} onClick={() => setShow(true)}>
            <BiMenu size={38} color='white' />
          </div>
          <div className={styles.nav_links}>
            <Link className={active === '' ? styles.active : null} href='/'>
              Home
            </Link>
            <Link
              className={active === 'about' ? styles.active : null}
              href='/about'
            >
              About Us
            </Link>
            <Link
              className={active === 'clients' ? styles.active : null}
              href='/clients'
            >
              Our Clients
            </Link>
          </div>
          {/* Social  */}
          <div className={styles.social}>
            <Link href='/contact' className='button'>
              Contact Us
            </Link>
            <BsLinkedin size={30} color='#03EECA' />
            <BsInstagram size={30} color='#03EECA' />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
