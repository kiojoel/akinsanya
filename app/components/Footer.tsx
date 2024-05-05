import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between w-full mt-10 pt-5 pb-2 px-8 text-sm ">
      <div className="">{new Date().getFullYear()}@ All Rights Reserved</div>
      <Link href="/">Akinsanya Joel</Link>
    </footer>
  );
};

export default Footer;
