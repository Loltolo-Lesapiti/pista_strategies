"use client";

import React, { useState } from "react";
import Image from "next/image";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import CustomButton from "@/components/buttonUi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";

    return pathname?.startsWith(href) ?? false;
  };

  const handleItemClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (
      event.type === "click" ||
      (event as React.KeyboardEvent).key === "Enter"
    ) {
      setIsMenuOpen(false);
    }
  };

  return (
    <NextUINavbar
      className="fixed top-0 left-0 right-0 bg-[#10393b] text-white py-4 z-50 mb-0"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            passHref
            className="flex justify-start items-center gap-1"
            href="/"
          >
            <Image src="/logo.PNG" alt="Logo Image" width={26} height={26} />
            <p className="font-bold text-inherit capitalize">Pista Logistics</p>
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
              <NextLink passHref href={item.href}>
                <span
                  className={`text-lg cursor-pointer ${
                    isActive(item.href)
                      ? "text-[#ef8450]"
                      : item.label === "Free Consult"
                      ? "text-[#10393b] bg-[#ef8450] px-4 py-2 rounded-lg border-2 border-[#ef8450] inline-block"
                      : "text-white hover:text-[#ef8450]"
                  }`}
                >
                  {item.label}
                </span>
              </NextLink>
            </NavbarItem>
          ))}
        </ul>

        <NavbarItem className="hidden md:flex">
          <CustomButton
            backgroundColor="#10393b"
            body="Free Consult"
            href="/contact"
          />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <div className="bg-[#ef8450] p-4 flex items-center justify-center rounded-[10px] text-white w-[50px] h-[50px]">
          <NavbarMenuToggle className="text-white font-bold" />
        </div>
      </NavbarContent>

      <NavbarMenu className="bg-[#10393b] text-white border-white pt-16">
        <div className="mx-4 mt-4 flex flex-col gap-10">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink passHref href={item.href}>
                {item.label === "Free Consult" ? (
                  <button
                    className="text-lg cursor-pointer text-[#10393b] bg-[#ef8450] px-4 py-2 rounded-lg border-2 border-[#ef8450] inline-block"
                    onClick={handleItemClick}
                    onKeyDown={handleItemClick}
                  >
                    {item.label}
                  </button>
                ) : (
                  <button
                    className={`text-lg cursor-pointer ${
                      isActive(item.href)
                        ? "text-[#ef8450]"
                        : "text-white hover:text-[#ef8450]"
                    }`}
                    tabIndex={0}
                    onClick={handleItemClick}
                    onKeyDown={handleItemClick}
                  >
                    {item.label}
                  </button>
                )}
              </NextLink>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex md:hidden ">
            <CustomButton
              backgroundColor="#10393b"
              body="Free Consult"
              href="/contact"
            />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
