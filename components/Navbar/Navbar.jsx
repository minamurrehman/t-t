import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";

import Logo from "../../images/logo.png";
import Instagram from "../../images/instagram.png";
import Linkedin from "../../images/linkedin.png";

import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import Link from "next/link";

import data from "../../utils/data.json";

const Navbar = ({ active }) => {
  const [show, setShow] = React.useState(false);
  return (
    <nav className={styles.navWrapper}>
      {show ? (
        <div className={styles.mobileMenu}>
          <div className={styles.topRow}>
            <Link href="/" style={{ cursor: "pointer" }}>
              <Image src={Logo} alt="Logo" />
            </Link>
            <AiOutlineClose
              size={38}
              color="white"
              onClick={() => setShow(false)}
            />
          </div>

          <div className={styles.navMenus}>
            {data?.menu?.map((item, index) => (
              <Link key={index} href={item?.url} onClick={() => setShow(false)}>
                {item?.title}
              </Link>
            ))}
          </div>
          <div className={styles.mobileSocial}>
            <Link href="mailto:buysse.tim@gmail.com" className="button">
              Contact Us
            </Link>
            <div>
              <Link href="https://www.linkedin.com/company/tntmarketing/">
                <BsLinkedin size={30} color="#03EECA" />
              </Link>
              <Link href="https://www.instagram.com/marketing.tnt/">
                <BsInstagram size={30} color="#03EECA" />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.nav}>
          <Link href="/" style={{ cursor: "pointer" }}>
            <Image src={Logo} alt="Logo" />
          </Link>
          {/* Nav Links  */}
          <div className={styles.hamburger} onClick={() => setShow(true)}>
            <BiMenu size={38} color="white" />
          </div>
          <div className={styles.nav_links}>
            {data?.menu?.map((item, index) => (
              <Link
                className={
                  active === item?.url.split("/")[1] ? styles.active : null
                }
                key={index}
                href={item?.url}
              >
                {item?.title}
              </Link>
            ))}
          </div>
          {/* Social  */}
          <div className={styles.social}>
            <Link href="mailto:tim@ttmarketing.be" className="button">
              Let's Talk
            </Link>
            <Link href="https://www.linkedin.com/company/tntmarketing/">
              <BsLinkedin size={30} color="#03EECA" />
            </Link>
            <Link href="https://www.instagram.com/marketing.tnt/">
              <BsInstagram size={30} color="#03EECA" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
