import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
      <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
        About Us
      </div>
      <div className="flex flex-col gap-4 items-center justify-center md:flex-row md:items-start md:gap-16">
        <div className="flex flex-col items-start justify-around shrink-0 md:flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b] text-justify">
            Who We Are
          </h2>
          <p className="font-normal text-base mt-[10px] mb-[35px] text-[#7b7b7b] normal-case text-justify">
            Pista Strategies is a business writing agency committed to helping
            small and medium-sized businesses achieve their full potential. With
            a team of experienced consultants and a results-driven approach, we
            consistently exceed expectations and empower our clients to succeed.
            Guided by professionalism, confidentiality, and efficiency, we
            simplify the path to business growth and success.
          </p>
        </div>
        <div className="flex flex-col items-start justify-around shrink-0 md:flex-1">
          <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b] text-justify">
            Our Story
          </h2>
          <p className="font-normal text-base mt-[10px] mb-[35px] text-[#7b7b7b] normal-case text-justify">
            After many years of working with small and medium sized businesses
            (SMEs) and venture incubators, our founder saw how hard early-stage
            entrepreneurs, established business owners and funds seekers missed
            opportunities for lack of comprehensive business plan.
            Billion-dollar ideas were overlooked by investors for the lack of a
            working business plan and articulate value proposition to the
            customers. As a result, our founder came up with Pista Strategies to
            help business owners thrive by communicating their value to the
            customers. Our approach keeps your company at the center of
            attention to get investors, win grants, increase brand awareness and
            get customers.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-full mb-8 md:mb-0 relative">
        <Image
          alt="Picture of the author"
          className="relative rounded-[15px] shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto z-20"
          height={500}
          src="/about.webp"
          width={1000}
        />
      </div>
    </div>
  );
};
