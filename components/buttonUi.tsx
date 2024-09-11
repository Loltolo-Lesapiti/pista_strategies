import clsx from "clsx";
import { Button } from "@nextui-org/button";

interface CustomButtonProps {
  body: string;
  backgroundColor: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  body,
  backgroundColor,
  className,
}) => {
  const isWhiteBackground =
    backgroundColor?.toLowerCase() === "#ffffff" ||
    backgroundColor?.toLowerCase() === "white";

  return (
    <Button
      className={clsx(
        "relative overflow-hidden",
        "text-base font-normal capitalize p-8",
        "border-2 border-[#ef8450]",
        "transition-colors duration-300 ease-in-out",
        "group",
        {
          "text-black": isWhiteBackground,
          "text-white": !isWhiteBackground,
        },
        className
      )}
      style={{ backgroundColor }}
    >
      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
        {body}
      </span>
      <span
        className={clsx(
          "absolute inset-0",
          "transform translate-y-full transition-transform duration-300 ease-in-out",
          "group-hover:translate-y-0",
          {
            "bg-white": !isWhiteBackground,
            "bg-[#ef8450]": isWhiteBackground,
          }
        )}
      />
    </Button>
  );
};

export default CustomButton;
