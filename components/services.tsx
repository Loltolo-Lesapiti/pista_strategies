import Image from "next/image";
import Link from "next/link";
export const Services = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-8 px-8">
      <div className="flex flex-col items-start justify-center w-2/5">
        <div className="text-[#ef8450] font-medium py-2 px-8 bg-[#ffffff38] text-base uppercase">
          Serives
        </div>
        <h2 className="text-6xl font-bold mt-[20px] mb-[10px] text-[#10393b]">
          Our capabilities
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case">
          Transforming your digital environment with creative solutions and
          strategic approaches for unrivaled success.
        </p>
      </div>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="flex flex-col justify-center items-start gap-[16px] h-[315px] w-[315px] mt-[13px] mb-[13px] p-[30px] rounded-lg bg-white shadow-2xl">
          <div className="flex justify-center items-center">
            <Image
              src="/service1.png"
              width={80}
              height={80}
              alt="Picture of the author"
              className=""
            />
          </div>
          <h4 className="text-2xl font-bold text-[#10393b] mt-[14px] mb-[8px] ">
            Search Position
          </h4>
          <p className="text-base font-normal text-[#7b7b7b] mb-[14px]">
            We Improving website visibility on search engines.
          </p>
          <div className=" text-[#ef8450] text-base font-normal flex flex-row justify-start items-center gap-[5px]">
            <Link href="/">Read more</Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-[16px] h-[315px] w-[315px] mt-[13px] mb-[13px] p-[30px] rounded-lg bg-white shadow-2xl">
          <div className="flex justify-center items-center">
            <Image
              src="/service1.png"
              width={80}
              height={80}
              alt="Picture of the author"
              className=""
            />
          </div>
          <h4 className="text-2xl font-bold text-[#10393b] mt-[14px] mb-[8px] ">
            Search Position
          </h4>
          <p className="text-base font-normal text-[#7b7b7b] mb-[14px]">
            We Improving website visibility on search engines.
          </p>
          <div className=" text-[#ef8450] text-base font-normal flex flex-row justify-start items-center gap-[5px]">
            <Link href="/">Read more</Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-[16px] h-[315px] w-[315px] mt-[13px] mb-[13px] p-[30px] rounded-lg bg-white shadow-2xl">
          <div className="flex justify-center items-center">
            <Image
              src="/service1.png"
              width={80}
              height={80}
              alt="Picture of the author"
              className=""
            />
          </div>
          <h4 className="text-2xl font-bold text-[#10393b] mt-[14px] mb-[8px] ">
            Search Position
          </h4>
          <p className="text-base font-normal text-[#7b7b7b] mb-[14px]">
            We Improving website visibility on search engines.
          </p>
          <div className=" text-[#ef8450] text-base font-normal flex flex-row justify-start items-center gap-[5px]">
            <Link href="/">Read more</Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-[16px] h-[315px] w-[315px] mt-[13px] mb-[13px] p-[30px] rounded-lg bg-white shadow-2xl">
          <div className="flex justify-center items-center">
            <Image
              src="/service1.png"
              width={80}
              height={80}
              alt="Picture of the author"
              className=""
            />
          </div>
          <h4 className="text-2xl font-bold text-[#10393b] mt-[14px] mb-[8px] ">
            Search Position
          </h4>
          <p className="text-base font-normal text-[#7b7b7b] mb-[14px]">
            We Improving website visibility on search engines.
          </p>
          <div className=" text-[#ef8450] text-base font-normal flex flex-row justify-start items-center gap-[5px]">
            <Link href="/">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
