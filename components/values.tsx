import Image from "next/image";
export const Values = () => {
  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex flex-col justify-center items-start gap-[16px] h-[213px] w-[220px]">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
          <Image
            src="/val1.webp"
            width={35}
            height={35}
            alt="Picture of the author"
            className=""
          />
        </div>
        <h4 className="text-base font-bold text-[#10393b] ">Search Position</h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          We Improving website visibility on search engines.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-[16px] h-[213px] w-[220px] mt-0">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
          <Image
            src="/val2.webp"
            width={35}
            height={35}
            alt="Picture of the author"
            className=""
          />
        </div>
        <h4 className="text-base font-bold text-[#10393b] ">Target Market</h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          Developed a targeted PPC campaign on Google Ads
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-[16px] h-[213px] w-[220px]">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
          <Image
            src="/val3.webp"
            width={35}
            height={35}
            alt="Picture of the author"
            className=""
          />
        </div>
        <h4 className="text-base font-bold text-[#10393b] ">Best Strategy</h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          Developed a detailed audience analysis and content themes.
        </p>
      </div>
    </div>
  );
};
