import { Button } from "@nextui-org/button";

export const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#10393b] rounded-[15px] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="text-[#ef8450] font-medium text-sm sm:text-base uppercase mb-4">
          LETS TALK
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 sm:mt-4 mb-2 sm:mb-4 text-white text-center w-full sm:w-4/5 lg:w-3/5">
          We love challenges big and small - whats yours?
        </h2>
        <p className="font-normal text-sm sm:text-base mt-2 sm:mt-4 mb-6 sm:mb-8 text-[#ffffffb8] normal-case text-center w-full sm:w-4/5 lg:w-3/5">
          Our committed staff makes sure that there are digital strategies,
          compliance, and customized advice. We are a reliable partner for your
          digital success because of our quality and service.
        </p>
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center w-full">
          <Button className="text-xs sm:text-sm md:text-base font-normal bg-[#ef8450] text-white p-2 sm:p-4 md:p-6 lg:p-8 capitalized flex-1 sm:flex-none max-w-[180px]">
            Get Started
          </Button>
          <Button className="text-xs sm:text-sm md:text-base font-normal border-[#ef8450] bg-[#10393b] border-2 text-white p-2 sm:p-4 md:p-6 lg:p-8 capitalized flex-1 sm:flex-none max-w-[180px]">
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};
