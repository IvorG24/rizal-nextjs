"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { useActiveSectionContext } from "@/context/active-section-context";
import { siteConfig } from "@/config/site";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { MdMenu } from "react-icons/md";
import NavMenu from "./navmenu";

export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <nav className="bg-trasparent lg:bg-black/70 p-2 z-50 h-20  fixed top-0 font-serif  w-full">
      <div className="hidden lg:flex items-center justify-evenly h-full w-full">
        <div className="flex gap-x-10">
          {links.slice(0, 3).map((item, index) => (
            <Link
              key={index}
              className="text-white text-xl hover:text-yellow-400 duration-300"
              href={item.hash}
              onClick={() => {
                setActiveSection(item.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <Link href={"/"}>
          <div className="fixed top-1 z-50">
            <Image
              src="/assets/rizal-image.png"
              height={10}
              width={70}
              alt="rizal word"
            />
          </div>
        </Link>

        <div className="flex gap-x-10">
          {links.slice(3, 6).map((item, index) => (
            <Link
              key={index}
              className="text-white text-xl hover:text-yellow-400 duration-300"
              href={item.hash}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <NavMenu />
    </nav>
  );
}
