import Image from "next/image";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-16">
      <div className="flex flex-col items-center justify-around shrink-0 md:px-0 md:pt-8">
        <div className="text-[#ef8450] font-medium bg-[#ffffff38] text-base uppercase">
          About
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b] text-center md:w-3/5">
          Transform with innovative strategies
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case text-center md:w-3/5">
          With a committed group of experts, we guarantee precise financial
          reporting, adherence to rules and guidelines, and strategic advice
          catered to your particular requirements.
        </p>
      </div>
      <div className="flex justify-center items-center w-full md:w-full mb-8 md:mb-0 relative">
        <Image
          src="/about.webp"
          width={1000}
          height={500}
          alt="Picture of the author"
          className="relative rounded-[15px] shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto z-20"
        />
      </div>
    </div>
  );
};
