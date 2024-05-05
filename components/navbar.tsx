import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <NextUINavbar className="bg-blue-700" maxWidth="xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <NavbarBrand as="li" className="gap-3 max-w-fit"></NavbarBrand>
        <ul className="hidden lg:flex justify-around w-full  ml-2">
          <div className="flex gap-x-10">
            {siteConfig.navItems.slice(0, 3).map((item) => (
              <NavbarItem key={item.href}>
                <NextLink className="text-white text-2xl" href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>
          <div className="flex gap-x-10 ">
            {siteConfig.navItems.slice(3, 6).map((item) => (
              <NavbarItem key={item.href}>
                <NextLink className="text-white text-2xl" href={item.href}>
                  {item.label}
                </NextLink>
              </NavbarItem>
            ))}
          </div>
        </ul>
      </NavbarContent>
    </NextUINavbar>
  );
};
