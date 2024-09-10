import Image from "next/image";

export default function Choose() {
  return (
    <div className="flex flex-col gap-8  md:flex-row justify-between items-center gap-8 md:px-0">
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 gap-4 relative mb-16 md:mb-0 ">
        <Image
          src="/choose.webp"
          width={500}
          height={500}
          alt="Picture of the author"
          className="relative rounded-lg shadow-y-7xl shadow-[#ffffff38] shadow-black w-full md:w-auto"
        />
        <div className="absolute flex flex-col bottom-[-113px] items-center justify-around gap-[10px] bg-[#10393b] w-[90%] px-6 md:w-[390px] rounded-[15px] py-[25px] z-10 text-center self-center">
          <h4 className="text-white text-base font-semibold mt-[10px]">
            Our Goal:
          </h4>
          <p className="text-[#ffffffb8] text-base font-medium mb-[10px]">
            &ldquo;Innovative Strategies for Maximum Impact and Lasting
            Success.&rdquo;
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
          Our committed staff makes sure that digital strategies and customized
          advice are met. We stand behind our quality and level of service.
        </p>
        <div className="flex flex-col justify-start gap-[10px]">
          {[
            { src: "/list1.webp", text: "Save Time And Money" },
            { src: "/list2.webp", text: "Growing & Scale Up Businesses" },
            { src: "/list3.webp", text: "Success Campaign on Social" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 justify-start items-center"
            >
              <div className="flex w-[45px] h-[45px] p-0 justify-center items-center bg-[#ef8450] rounded-full">
                <Image
                  src={item.src}
                  width={25}
                  height={25}
                  alt="List icon"
                  className=""
                />
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
