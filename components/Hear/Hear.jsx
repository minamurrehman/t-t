import React from "react";
import Button from "../Button/Button";
import Image from "next/image";
import ContactImage from "../../images/contact.svg";
const Hear = () => {
  return (
    <section className="max-w-7xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-y-6 place-items-center items-center px-4">
      <div>
        <Image
          src={ContactImage}
          alt="Contact Us image"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-6 items-center">
        <p className="text-4xl  font-medium max-w-[470px] text-center">
          We can't wait to hear about your business aspirations and discuss how
          we can help you achieve them.
        </p>
        <Button href="mailto:buysse.tim@gmail.com" title="Let's talk" />
      </div>
    </section>
  );
};

export default Hear;
