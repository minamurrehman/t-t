import Link from "next/link";
import React from "react";

const Button = ({ href, title, className }) => {
  return (
    <Link
      href={href || "mailto:buysse.tim@gmail.com"}
      className={`bg-secondary px-2 py-1 text-lg text-primary font-medium rounded-sm ${className}`}
    >
      {title}
    </Link>
  );
};

export default Button;
