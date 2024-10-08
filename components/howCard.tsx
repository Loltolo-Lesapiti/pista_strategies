"use client";
import { CardAnimation, FadeInItem, FadeInContainer } from "./animation";

export const HowCard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-y-14 lg:grid-cols-3">
      {[1, 2, 3].map((step, index) => (
        <CardAnimation
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          key={index}
          className="relative flex flex-col justify-center items-center gap-4 w-full bg-white text-center border-white shadow-lg rounded-[15px] py-16 px-4 h-[200px] md:h-[270px] md:px-8 mb-16 md:mb-0"
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center h-[60px] w-[60px]  md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] bg-[#10393b] mt-[-30px] md:mt-[-45px] rounded-full">
            <h2 className="text-white font-bold text-2xl md:text-4xl m-0 p-0">
              {step}
            </h2>
          </div>
          <h4 className="text-xl md:text-2xl font-bold text-[#10393b] mt-8 md:mt-0">
            {step === 1 && "Consultation"}
            {step === 2 && "Partnership"}
            {step === 3 && "Subscription"}
          </h4>
          <p className="text-sm md:text-base font-normal text-[#7b7b7b] mt-4">
            {step === 1 &&
              "This model is for bespoke solutions. We discuss with client on the specific business needs then tailor solutions to the specific requirements. Pricing is arrived at depending on client’s scope of work."}
            {step === 2 &&
              "This is a collaborative approach where we build solutions through strategic partnership. Could be business incubators, businesses, or individuals."}
            {step === 3 &&
              "This model is perfect for clients who are looking for a real-time alter to an already existing solution. We focus on your core business and specific requirements."}
          </p>
        </CardAnimation>
      ))}
    </div>
  );
};
