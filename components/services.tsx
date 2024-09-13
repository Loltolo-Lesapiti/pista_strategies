import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "./icons";

export const Services = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-4 px-8">
      <div className="flex flex-col items-start justify-center w-full lg:w-2/5 mb-8 lg:mb-0">
        <div className="text-[#ef8450] font-medium py-2 px-4 lg:px-8 bg-[#ffffff38] text-sm lg:text-base uppercase">
          Services
        </div>
        <h2 className="text-4xl lg:text-6xl font-bold mt-4 lg:mt-[20px] mb-[10px] text-[#10393b] md:w-2/5">
          Our capabilities
        </h2>
        <p className="font-normal text-sm lg:text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case md:pr-4">
          Empowering small and medium size businesses to provide the best
          possible quality for thier clients
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
        {[1, 2, 3, 4].map((index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-[16px] h-auto lg:h-[315px] w-full lg:w-[315px] mt-[13px] mb-[13px] p-[30px] rounded-lg bg-white shadow-2xl"
          >
            <div className="flex justify-center items-center">
              <Image
                src="/service1.png"
                width={80}
                height={80}
                alt="Service icon"
                className=""
              />
            </div>
            <h4 className="text-xl lg:text-2xl font-bold text-[#10393b] mt-[14px] mb-[8px]">
              Search Position
            </h4>
            <p className="text-sm lg:text-base font-normal text-[#7b7b7b] mb-[14px]">
              We Improving website visibility on search engines.
            </p>
            <div className="text-[#ef8450] hover:text-black text-sm lg:text-base font-normal flex flex-row justify-start items-center gap-[5px]">
              <Link href="/" className="flex items-center">
                Read more
                <ArrowIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
