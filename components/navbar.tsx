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
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";
import CustomButton from "@/components/buttonUi";

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleItemClick = (label: string, href: string) => {
    setActiveItem(label);
    setIsMenuOpen(false);

    if (href.startsWith("/#")) {
      // Smooth scroll to section
      const sectionId = href.split("#")[1];
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to new page
      router.push(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 60) {
          // 60px offset for navbar height
          currentActiveSection = section.getAttribute("id") || "";
        }
      });

      setActiveItem(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NextUINavbar
      className="fixed top-0 left-0 right-0 bg-[#10393b] text-white pt-4 pb-8 z-50 mb-0"
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">PISTA</p>
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
              <Link
                onClick={() => handleItemClick(item.label, item.href)}
                className={`text-lg ${
                  item.label.toLowerCase() === activeItem
                    ? "text-[#ef8450]"
                    : item.label === "Free Consult"
                    ? "text-[#10393b] bg-[#ef8450] px-4 py-2 rounded-lg border-2 border-[#ef8450] inline-block"
                    : "text-white hover:text-[#ef8450]"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>

        <NavbarItem className="hidden md:flex">
          <CustomButton backgroundColor="#10393b" body="Free Consult" />
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
              <Link
                onClick={() => handleItemClick(item.label, item.href)}
                className={`text-lg ${
                  item.label.toLowerCase() === activeItem
                    ? "text-[#ef8450]"
                    : item.label === "Free Consult"
                    ? "text-[#10393b] bg-[#ef8450] px-4 py-2 rounded-lg border-2 border-[#ef8450] inline-block"
                    : "text-white hover:text-[#ef8450]"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex md:hidden ">
            <CustomButton backgroundColor="#10393b" body="Free Consult" />
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
