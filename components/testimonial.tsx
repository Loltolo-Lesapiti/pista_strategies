import Image from "next/image";

import TestimonialSlider from "./slider";

export const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:p-8 md:flex flex-row">
      <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-xs sm:text-sm md:text-base uppercase px-3 py-1 rounded-full">
        Testimonial
      </div>
      <h2 className="text-center mb-2 sm:mb-3 md:mb-8">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[#10393b] leading-tight md:w-3/4">
          What clients say about us
        </span>
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-2 sm:gap-8 w-full">
        <div className="w-full lg:w-1/2 flex justify-center p-0 m-0">
          <Image
            alt="Testimonial illustration"
            className="rounded-lg sm:rounded-xl md:rounded-2xl w-full max-w-[400px] lg:max-w-[500px] h-auto"
            height={500}
            src="/testimonial.webp"
            width={500}
          />
        </div>
        <div className="w-full lg:w-3/5 ml-0 pl-0">
          <TestimonialSlider />
        </div>
      </div>
    </div>
  );
};
