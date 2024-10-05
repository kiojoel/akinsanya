import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full  py-4 px-8 text-[12px]">
      <div>{new Date().getFullYear()} @ All Rights Reserved</div>
      <Link href="/">Akinsanya Joel</Link>
    </footer>
  );
};

export default Footer;
