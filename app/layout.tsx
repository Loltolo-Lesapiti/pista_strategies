import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontHeading, fontBody } from "@/config/fonts";
import Header from "@/components/sections/header";
import FooterComponent from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logo1.png",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-body antialiased",
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="w-full max-w-full relative flex flex-col h-screen">
          <Header />
          <main className="flex-grow bg-[#fffaf1]">{children}</main>
          <footer className="relative flex flex-col items-center justify-stretch  pt-[70px] px-10 bg-[#fffaf1]">
            <FooterComponent />
          </footer>
        </div>
      </body>
    </html>
  );
}
