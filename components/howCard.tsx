import React from "react";

export const HowCard = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4 md:gap-8 px-4 md:px-8">
      {[1, 2, 3].map((step, index) => (
        <div
          key={index}
          className="relative flex flex-col justify-center items-center gap-4 w-full md:w-1/3 bg-white text-center border-white shadow-lg rounded-[15px] py-16 px-4 h-[200px] md:h-[270px] md:px-8 mb-16 md:mb-0]"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center h-[60px] w-[60px] md:h-[90px] md:w-[90px] bg-[#10393b] mt-[-30px] md:mt-[-45px] rounded-full">
            <h2 className="text-white font-bold text-2xl md:text-4xl m-0 p-0">
              {step}
            </h2>
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-[#10393b] mt-8 md:mt-0">
            {step === 1 && "Provide us with the Details"}
            {step === 2 && "Pick The Suitable Plan"}
            {step === 3 && "We Proceed Your Request"}
          </h4>
          <p className="text-sm md:text-base font-normal text-[#7b7b7b] mt-4">
            {step === 1 &&
              "Share your specific needs and requirements so we can tailor our approach to suit you."}
            {step === 2 &&
              "Choose the plan that best fits your goals and budget from our range of options."}
            {step === 3 &&
              "Our team will carefully review and process your request to ensure the best outcome."}
          </p>
        </div>
      ))}
    </div>
  );
};
