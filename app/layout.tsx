import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontHeading, fontBody } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import FooterComponent from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
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
        <div className="relative flex flex-col h-screen">
          <Navbar />
          <main className="container max-w-full flex-grow bg-[#fffaf1]">
            {children}
          </main>
          <footer className="relative flex flex-col items-center justify-stretch w-full pt-[70px] px-10 bg-[#fffaf1]">
            <FooterComponent />
          </footer>
        </div>
      </body>
    </html>
  );
}
