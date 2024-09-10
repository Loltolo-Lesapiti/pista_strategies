import Image from "next/image";
import { Button } from "@nextui-org/button";

export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center md:gap-16">
      <div className="flex flex-col items-start justify-items-start md:w-2/5 shrink-0 px-4 md:px-0">
        <h3 className="text-white font-medium py-2 px-8 bg-[#ffffff38] text-base rounded-lg max-w-fit uppercase">
          welcome to gradia
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mt-[20px] mb-[10px] text-white capitalized">
          Take a Boost for Your Bussiness
        </h1>
        <p className="font-normal text-base mt-[20px] mb-[35px] max-w-fit text-[#ffffffb8] normal-case">
          A top US specialty digital agency with a focus on creative growth
          tactics and customized solutions.
        </p>
        <Button className="text-base font-normal bg-[#ef8450] text-white p-6">
          Get Started
        </Button>
      </div>
      <div className="flex justify-center items-center w-full md:w-3/5 mt-8 md:mt-0">
        <Image
          src="/test.webp"
          width={707}
          height={525}
          alt="Picture of the author"
          className="relative rounded-lg shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto"
        />
      </div>
    </div>
  );
};
