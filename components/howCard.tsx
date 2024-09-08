export const HowCard = () => {
  return (
    <div className=" relative flex flex-row justify-around items-center w-full gap-8 shrink-0">
      <div className="flex flex-col justify-center items-center gap-[16px] w-1/3 bg-white text-center border-white shadow-lg rounded-[15px] py-16 px-8">
        <div className=" absolute top-0 flex justify-center items-center h-[90px] w-[90px] bg-[#10393b] mt-[-43px] rounded-full">
          <h2 className="text-white font-bold text-4xl m-0 p-0">1</h2>
        </div>
        <h4 className="text-2xl font-bold text-[#10393b]">
          Provide us with the <br /> Details
        </h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          Share your specific needs and requirements so we can tailor our
          approach to suit you.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-[16px] w-1/3 bg-white text-center border-white shadow-lg rounded-[15px] py-16 px-8">
        <div className=" absolute top-0 flex justify-center items-center h-[90px] w-[90px] bg-[#10393b] mt-[-43px] rounded-full">
          <h2 className="text-white font-bold text-4xl m-0 p-0">2</h2>
        </div>
        <h4 className="text-2xl font-bold text-[#10393b]">
          Pick The Suitable <br /> Plan
        </h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          Choose the plan that best fits your goals and budget from our range of
          options.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-[16px] w-1/3 bg-white text-center border-white shadow-lg rounded-[15px] py-16 px-8">
        <div className=" absolute top-0 flex justify-center items-center h-[90px] w-[90px] bg-[#10393b] mt-[-43px] rounded-full">
          <h2 className="text-white font-bold text-4xl m-0 p-0">3</h2>
        </div>
        <h4 className="text-2xl font-bold text-[#10393b]">
          We Proceed Your <br /> Request
        </h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          Choose the plan that best fits your goals and budget from our range of
          options.
        </p>
      </div>
    </div>
  );
};
