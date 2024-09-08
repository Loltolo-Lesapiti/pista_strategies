import Image from "next/image";
import TestimonialSlider from "./slider";
export const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4">
      <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
        testimonial
      </div>
      <h2 className="text-6xl font-semibold text-[#10393b] text-center mb-4">
        What client say about us
      </h2>
      <div className="flex flex-row justify-center items-center gap-8">
        <Image
          src="/testimonial.webp"
          alt="Picture of the author"
          width={500}
          height={500}
          className="rounded-[15px]"
        />
        <TestimonialSlider />
      </div>
    </div>
  );
};
