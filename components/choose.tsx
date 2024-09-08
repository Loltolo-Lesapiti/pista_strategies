import Image from "next/image";

export default function Choose() {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-1/2 gap-4">
        <Image
          src="/choose.webp"
          width={500}
          height={500}
          alt="Picture of the author"
          className="relative rounded-lg shadow-y-7xl shadow-[#ffffff38] shadow-black"
        />
        <div className="absolute flex flex-col bottom-4 items-center justify-around gap-[10px] bg-[#10393b] w-[330px] rounded-[15px] p-[20px] mt-[-25px] z-10 text-center self-center">
          <h4 className="text-white text-base font-semibold mt-[10px]">
            Our Goal:
          </h4>
          <p className="text-[#ffffffb8] text-base font-medium mb-[10px]">
            Innovative Strategies for Maximum Impact and Lasting Success.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-items-start w-1/2 shrink-0">
        <div className="text-[#ef8450] font-medium py-2 px-8 bg-[#ffffff38] text-base uppercase">
          why choose us
        </div>
        <h2 className="text-6xl font-semibold mt-[20px] mb-[10px] text-[#10393b]">
          We offer the best business solutions
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case">
          Our committed staff makes sure that digital strategies and customized
          advice are met. We stand behind our quality and level of service.
        </p>
        <div className="flex flex-col justify-start gap-[10px]">
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="flex w-[45px] h-[45px] p-0 justify-center items-center bg-[#ef8450] rounded-full">
              <Image
                src="/list1.webp"
                width={25}
                height={25}
                alt="Picture of the author"
                className=""
              />
            </div>
            <h4 className="text=[#10393b] text-xl font-semibold">
              Save Time And Money
            </h4>
          </div>

          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="flex w-[45px] h-[45px] p-0 justify-center items-center bg-[#ef8450] rounded-full">
              <Image
                src="/list2.webp"
                width={25}
                height={25}
                alt="Picture of the author"
                className=""
              />
            </div>
            <h4 className="text=[#10393b] text-xl font-semibold">
              Growing & Scale Up Businesses
            </h4>
          </div>

          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="flex w-[45px] h-[45px] p-0 justify-center items-center bg-[#ef8450] rounded-full">
              <Image
                src="/list3.webp"
                width={25}
                height={25}
                alt="Picture of the author"
                className=""
              />
            </div>
            <h4 className="text=[#10393b] text-xl font-semibold">
              Success Campaign on Social
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
