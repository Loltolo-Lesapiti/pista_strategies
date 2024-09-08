import { HowCard } from "./howCard";
export const How = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
          See How it Works
        </div>
        <h2 className="text-6xl font-semibold mt-[20px] mb-[10px] text-[#10393b] text-center w-3/5">
          Fast & easy application process here
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case text-center w-3/5">
          Our committed staff makes sure that there are digital strategies,
          compliance, and customized advice. We are a reliable partner for your
          digital success because of our quality and service.
        </p>
      </div>
      <HowCard />
    </>
  );
};
