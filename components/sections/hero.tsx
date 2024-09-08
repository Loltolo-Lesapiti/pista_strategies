import { Hero } from "../hero";
import { Clients } from "../clients";
export const HeroSection = () => {
  return (
    <>
      <section className="w-full py-[130px] px-10 bg-[#10393b]">
        <Hero />
      </section>
      <Clients />
    </>
  );
};
