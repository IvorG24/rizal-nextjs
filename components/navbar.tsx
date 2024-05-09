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
export default function Navbar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <NextUINavbar className="bg-black/70 p-2 z-50 fixed top-0" maxWidth="full">
      <NavbarContent className="flex justify-evenly">
        <ul className="hidden lg:flex items-center justify-evenly w-full">
          <div className="flex gap-x-10 ">
            {links.slice(0, 3).map((item, index) => (
              <Link
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
            <Image
              src="/assets/rizal-image.png"
              height={10}
              width={55}
              alt="rizal word"
            />
          </Link>

          <div className="flex gap-x-10">
            {links.slice(3, 6).map((item, index) => (
              <NavbarItem key={index}>
                <Link
                  className="text-white text-xl hover:text-yellow-400 duration-300"
                  href={item.hash}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </ul>
      </NavbarContent>
    </NextUINavbar>
  );
}
