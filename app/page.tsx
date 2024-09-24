import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { Services } from "@/components/services";
import { ChooseSection } from "@/components/sections/choose";
import { HowSection } from "@/components/sections/how";
// import { TeamSection } from "@/components/sections/team";
// import { TestimonySection } from "@/components/sections/testimony";
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
      <section id="services">
        <Services />
      </section>
      <section id="choose">
        <ChooseSection />
      </section>
      <section id="how">
        <HowSection />
      </section>
      {/* <section id="team">
        <TeamSection />
      </section> */}
      {/* <section id="testimony">
        <TestimonySection />
      </section> */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
