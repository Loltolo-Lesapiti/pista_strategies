import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { Services } from "@/components/services";
import { ChooseSection } from "@/components/sections/choose";
import { HowSection } from "@/components/sections/how";
import { TeamSection } from "@/components/sections/team";
import { TestimonySection } from "@/components/sections/testimony";
import { ContactSection } from "@/components/sections/contact";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Services />
      <ChooseSection />
      <HowSection />
      <TeamSection />
      <TestimonySection />
      <ContactSection />
    </>
  );
}
