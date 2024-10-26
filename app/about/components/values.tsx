import Image from "next/image";

export const Statements = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center">
      <h2 className="text-4xl md:text-6xl font-bold md:mt-16 text-[#10393b] md:text-center md:w-3/5">
        Mission and Vision
      </h2>
      <div className="flex flex-col justify-start items-center md:flex-row justify-between items-center mt-16 px-4 md:px-0">
        <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:mb-0 w-1/3">
          <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
            <Image
              alt="Picture of the author"
              className=""
              height={35}
              src="/vision.webp"
              width={35}
            />
          </div>
          <h4 className="text-base font-bold text-[#10393b]">
            Vision Statement
          </h4>
          <p className="text-base font-normal text-[#7b7b7b] md:pr-4">
            To be the leading partner for SMEs and entrepreneurs, turning ideas into market-leading successes through expert business writing services and strategic consulting. </p>
        </div>

        <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:mb-0 w-1/3">
          <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-0">
            <Image
              alt="Picture of the author"
              className=""
              height={35}
              src="/mission.webp"
              width={35}
            />
          </div>
          <h4 className="text-base font-bold text-[#10393b]">
            Mission Statement
          </h4>
          <p className="text-base font-normal text-[#7b7b7b] md:pr-4">
            To empower SMEs and entrepreneurs to reach their full potential through
            tailored business plans, proposals and strategic
            documents that secure funding, drive growth and position them for success.
          </p>
        </div>
      </div>
    </div>
  );
};
