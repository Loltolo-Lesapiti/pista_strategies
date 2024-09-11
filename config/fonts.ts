import { Syne, Manrope } from "next/font/google";

export const fontHeading = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const fontBody = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});
