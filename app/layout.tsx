import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
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

export const viewport: Viewport = {
  themeColor: [{ color: "white" }, { color: "white" }],
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
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container max-w-full flex-grow bg-[#fffaf1]">
              {children}
            </main>
            <footer className="relative flex flex-col items-center justify-stretch w-full py-[130px] px-10">
              <FooterComponent />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-500">
                &#xA9; 2024 Petro
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
