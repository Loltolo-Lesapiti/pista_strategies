import { ContactSection } from "./components/sections/contact";
import { HeroSection } from "./components/sections/hero";
import { FaqSection } from "./components/sections/faqSection";
import { DetailsSection } from "./components/sections/detailsSection";
export default function Home() {
  return (
    <>
      <section id="home">
        <HeroSection />
        <ContactSection />
        <FaqSection />
        <DetailsSection />
      </section>
    </>
  );
}
