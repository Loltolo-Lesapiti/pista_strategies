import { ProfessionalismIcon } from "./icons";
import { ConfidenceIcon } from "./icons";
import { EfficiencyIcon } from "./icons";
export const Values = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mt-16 px-4 md:px-0">
      <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:w-1/3">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-3 text-white">
          <ProfessionalismIcon />
        </div>
        <h4 className="text-base font-bold text-[#10393b]">Professionalism</h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          We uphold the highest standards in our work and interactions.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:w-1/3">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-3 text-white">
          <ConfidenceIcon />
        </div>
        <h4 className="text-base font-bold text-[#10393b]">Confidence</h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          We approach challenges with assurance and self-belief.
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:w-1/3">
        <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-3 text-white">
          <EfficiencyIcon />
        </div>
        <h4 className="text-base font-bold text-[#10393b]">Efficiency</h4>
        <p className="text-base font-normal text-[#7b7b7b]">
          We optimize our processes to deliver results swiftly.
        </p>
      </div>
    </div>
  );
};

export default Values;
