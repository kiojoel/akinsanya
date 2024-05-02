"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Menu, Newspaper, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

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
    <nav className="flex align-center justify-between px-8 py-8 ">
      <div className="">
        <Link href="/">
          <h1 className=" text-lg font-extrabold ">Joel</h1>
          {/* <Image
            src="./public/download(1).svg"
            alt="Joel"
            height="26"
            width="26"
            className=" text-lg font-extrabold hover:text-black"
          /> */}
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

      <div className="hidden align-center justify-center sm:flex ">
        <Twitter className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
        <Linkedin className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
        <Github className="mr-3  text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
        <Newspaper className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
        <div className="">
          <ThemeToggle />
        </div>
      </div>

      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu className=" text-gray-500 h-7 w-7 hover:text-black" />
          </SheetTrigger>
          <SheetContent>
            <div className="mt-5 flex px-2 space-y-1 flex-col">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    pathname == item.href
                      ? "bg-muted"
                      : "hover:bg-muted hover:bg-opacity-75",
                    "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex align-center justify-center space-x-8 ">
              <Twitter className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
              <Linkedin className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
              <Github className="mr-3  text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
              <Newspaper className="mr-3 text-gray-500  hover:text-black  dark:hover:text-white hover:cursor-pointer" />
              <div className="">
                <ThemeToggle />
              </div>
            </div>
            <SheetFooter className="mt-5">
              <SheetClose asChild>
                <Button type="submit">Close</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
