import Image from "next/image";

import { IndustryIcon, ConsultingIcon, ValueCreationIcon } from "./icons";

export default function Choose() {
  return (
    <div className="flex flex-col gap-8 md:flex-row justify-between items-center md:px-0">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-4 relative mb-16 md:mb-0 ">
        <Image
          alt="Picture of the author"
          className="relative rounded-lg shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto"
          height={500}
          src="/choose.webp"
          width={500}
        />
        <div className="absolute flex flex-col bottom-[-113px] items-center justify-around gap-[10px] bg-[#10393b] w-[90%] px-6 md:w-[390px] rounded-[15px] py-[25px] z-10 text-center self-center">
          <h4 className="text-white text-base font-semibold mt-[10px]">
            Our Goal:
          </h4>
          <p className="text-[#ffffffb8] text-base font-medium mb-[10px]">
            &ldquo;Help businesses create value for their customers.&rdquo;
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start mt-[55px] justify-center w-full md:w-1/2 shrink-0">
        <div className="text-[#ef8450] font-medium py-2 bg-[#ffffff38] text-base uppercase">
          why choose us
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold mt-[20px] mb-[10px] text-[#10393b]">
          We offer the best business solutions
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#7b7b7b] normal-case">
          Our unique approach allows our clients to rapidly scale their business
        </p>
        <div className="flex flex-col justify-start gap-[10px]">
          {[
            { Icon: IndustryIcon, text: "Deep Industry Experience" },
            { Icon: ConsultingIcon, text: "Consulting Expertise" },
            { Icon: ValueCreationIcon, text: "Rapid Value Creation" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 justify-start items-center"
            >
              <div className="flex w-[45px] h-[45px] p-2 justify-center items-center bg-[#ef8450] rounded-full text-white">
                <item.Icon />
              </div>
              <h4 className="text-[#10393b] text-lg md:text-xl font-semibold">
                {item.text}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
