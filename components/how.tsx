import { HowCard } from "./howCard";

export const How = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 md:px-8 py-8 md:pt-12 md:gap-8">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-sm md:text-base uppercase px-4 py-2 rounded-full">
          See How it Works
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 md:mt-[20px] mb-4 md:mb-[10px] text-[#10393b] text-center md:w-3/5">
          Fast & easy application process here
        </h2>
        <p className="font-normal text-sm md:text-base mt-2 md:mt-[10px] mb-6 md:mb-[35px] text-[#7b7b7b] normal-case text-center md:w-3/5">
          Our committed staff makes sure that there are digital strategies,
          compliance, and customized advice. We are a reliable partner for your
          digital success because of our quality and service.
        </p>
      </div>
      <HowCard />
    </div>
  );
};
