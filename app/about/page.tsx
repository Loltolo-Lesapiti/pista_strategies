import { HeroSection } from "./components/sections/hero";
import { AboutSection } from "./components/sections/about";

import { ContactSection } from "@/components/sections/contact";
export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
