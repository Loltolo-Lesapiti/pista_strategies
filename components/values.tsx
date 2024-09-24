import {
  ProfessionalismIcon,
  ConfidenceIcon,
  EfficiencyIcon,
  SimplifyIcon,
} from "./icons";

interface ValueItemProps {
  Icon: React.ComponentType;
  title: string;
  description: string;
}

export const Values = () => {
  return (
    <div className="flex flex-col md:items-center md:justify-center">
      <h2 className="text-4xl md:text-6xl mt-8 font-bold md:mt-16 text-[#10393b] md:text-center md:w-3/5">
        Our Values
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-start mt-16 px-4 md:px-0">
        <ValueItem
          Icon={ProfessionalismIcon}
          title="Professionalism"
          description="We uphold the highest standards in our work and interactions."
        />
        <ValueItem
          Icon={ConfidenceIcon}
          title="Confidentiality"
          description="Our clients privacy is our top most priority"
        />
        <ValueItem
          Icon={SimplifyIcon}
          title="Simplicity"
          description="We strive for clarity and ease in our solutions and processes."
        />
        <ValueItem
          Icon={EfficiencyIcon}
          title="Efficiency"
          description="We optimize our processes to deliver results swiftly."
        />
      </div>
    </div>
  );
};

const ValueItem: React.FC<ValueItemProps> = ({ Icon, title, description }) => (
  <div className="flex flex-col justify-center items-start gap-[16px] mb-8 w-full md:w-1/4">
    <div className="flex justify-center items-center h-[50px] w-[50px] bg-[#10393b] rounded-full p-3 text-white">
      <Icon />
    </div>
    <h4 className="text-base font-bold text-[#10393b]">{title}</h4>
    <p className="text-base font-normal text-[#7b7b7b]">{description}</p>
  </div>
);

export default Values;
