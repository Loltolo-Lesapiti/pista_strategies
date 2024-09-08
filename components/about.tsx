import Image from "next/image";
import { Button } from "@nextui-org/button";

export const About = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-stretch">
      <div className="flex flex-col items-start justify-items-start w-1/2 shrink-0">
        <div className="text-[#ef8450] font-medium py-2 px-8 bg-[#ffffff38] text-base uppercase">
          About
        </div>
        <h2 className="text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b]">
          We are the best digital agency for business
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case">
          With a committed group of experts, we guarantee precise financial
          reporting, adherence to rules and guidelines, and strategic advice
          catered to your particular requirements.
        </p>
        <Button className="text-base font-normal bg-[#ef8450] text-white p-6 capitalized">
          More about us
        </Button>
      </div>
      <div className="flex justify-center items center w-1/2">
        <Image
          src="/test2.webp"
          width={500}
          height={500}
          alt="Picture of the author"
          className="relative rounded-lg shadow-y-7xl shadow-[#ffffff38] shadow-black"
        />
      </div>
    </div>
  );
};
