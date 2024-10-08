import React from "react";
import clsx from "clsx";
import { Button } from "@nextui-org/button";
import Link from "next/link";

interface CustomButtonProps {
  body: string;
  backgroundColor: string;
  href?: string;
  className?: string;
  type?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  body,
  backgroundColor,
  href,
  className,
}) => {
  const isWhiteBackground =
    backgroundColor?.toLowerCase() === "#ffffff" ||
    backgroundColor?.toLowerCase() === "white";

  const safeHref = typeof href === "string" && href ? href : "#";

  return (
    <Link legacyBehavior passHref href={safeHref}>
      <Button
        as="a"
        className={clsx(
          "relative overflow-hidden",
          "text-base font-normal capitalize p-6",
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
    </Link>
  );
};

export default CustomButton;
