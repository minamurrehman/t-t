import React from "react";
import Logo from "../../images/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Image
            src={Logo}
            alt="Logo"
            width={60}
            height={120}
            className="footer__logo__image"
          />
          <div className="footer__logo__links">
            <Link href="/meet-the-team">Meet the team</Link>
            <Link href="/clients">Our Clients</Link>
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="footer__contact">
          <p className="footer__headings">Contact Us</p>
          <Link href="mailto:buysse.tim@gmail.com">Send an e-mail</Link>
          <Link href="https://calendly.com/timbuysse1985">Book a Meeting</Link>
        </div>
        <div className="footer__social">
          <p className="footer__headings">Social</p>
          <Link href="https://www.instagram.com/marketing.tnt/">Instagram</Link>
          <Link href="https://www.linkedin.com/company/tntmarketing/">
            Linkedin
          </Link>
        </div>
      </div>
      <p className="footer__copyright">© 2023 T & T Marketing</p>
    </footer>
  );
};

export default Footer;
