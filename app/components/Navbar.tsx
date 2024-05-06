"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { Poiret_One } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const poit = Poiret_One({ subsets: ["latin"], weight: "400" });

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Articles",
    href: "/articles",
  },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex align-center justify-between px-8 py-8 sticky top-0 z-50 bg-slate-50 dark:bg-black ">
      <div className="mt-[-8px]">
        <Link href="/">
          <h1
            className={cn(
              `${poit.className} font-extrabold text-2xl text-gray-800 dark:text-gray-300`
            )}
          >
            Joel
          </h1>
        </Link>
      </div>

      <div className="hidden sm:flex ">
        {navItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div
              className={`text-gray-500 font-bold hover:text-black dark:hover:text-white mr-5 text-md  ${
                pathname === item.href ? " text-black  dark:text-white " : ""
              }`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>

      <div className=" flex align-center justify-center ">
        <a
          href="https://twitter.com/Akinsanya__Joel"
          target="_blabk"
          className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer"
        >
          <Twitter />
        </a>
        <a
          href="https://www.linkedin.com/in/akinsanya-joel-1a5b51168/"
          target="_blabk"
          className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/kiojoel"
          target="_blabk"
          className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer"
        >
          <Github />
        </a>
        {/* <a href="https://medium.com/@akinsanyajoel82" target="_blank">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer"
          >
            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
          </svg>
        </a> */}
        <div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
