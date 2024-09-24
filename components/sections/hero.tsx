import { Hero } from "../hero";
// import { Clients } from "../clients";
export const HeroSection = () => {
  return (
    <div className="w-full bg-[#10393b]">
      <div className="max-w-full mx-auto py-[130px] px-4 md:px-4 md:py-[130px]">
        <Hero />
      </div>
      {/* <Clients /> */}
    </div>
  );
};
