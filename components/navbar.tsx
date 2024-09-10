"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleItemClick = (label: string) => {
    setActiveItem(label);
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="mb-0 pb-0 bg-[#10393b] text-white to-0 pt-4 right-0 z-50"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden lg:flex gap-8">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={`${item}-${index}`}>
              <NextLink
                onClick={() => handleItemClick(item.label)}
                className={`text-lg ${
                  item.label === activeItem
                    ? "text-[#ef8450]"
                    : item.label === "Free Consult"
                    ? "text-[#10393b] bg-[#ef8450] px-4 py-2 rounded-lg border-2 border-[#ef8450] inline-block"
                    : "text-white hover:text-[#ef8450]"
                }`}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>

        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="relative text-base font-medium text-white bg-[#10393b] border-2 rounded-lg border-[#ef8450] overflow-hidden transition-colors duration-300 ease-in-out group"
            href="/"
            variant="flat"
          >
            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#10393b]">
              Free Consult
            </span>
            <span className="absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-in-out group-hover:h-full" />
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="bg-[#ef8450] p-4 flex items-center justify-center rounded-[10px] text-white w-[50px] h-[50px]">
          <NavbarMenuToggle className="text-white font-bold" />
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-[#10393b] text-white border-white ">
        <div className="mx-4 mt-4 flex flex-col gap-10">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                href="#"
                onClick={() => handleItemClick(item.label)}
                className={`text-lg ${
                  item.label === activeItem
                    ? "text-[#ef8450]"
                    : item.label === "Free Consult"
                    ? "text-[#10393b] bg-[#ef8450] px-4 py-2 rounded-lg border-2 border-[#ef8450] inline-block"
                    : "text-white hover:text-[#ef8450]"
                }`}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex md:hidden ">
            <Button
              isExternal
              as={Link}
              className="relative text-base font-medium text-white bg-[#10393b] border-2 rounded-lg border-[#ef8450] overflow-hidden transition-colors duration-300 ease-in-out group"
              href="/"
              variant="flat"
            >
              <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-[#10393b]">
                Free Consult
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0 bg-white transition-all duration-300 ease-in-out group-hover:h-full" />
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
