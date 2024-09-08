import { Button } from "@nextui-org/button";
export const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#10393b] rounded-[15px] py-[80px]">
        <div className="text-[#ef8450] font-medium text-base uppercase">
          LETS TALK
        </div>
        <h2 className="text-6xl font-semibold mt-[20px] mb-[10px] text-white text-center w-3/5">
          We love challenges big and small - what's yours?
        </h2>
        <p className="font-normal text-base mt-[10px] mb-[35px] max-w-fit text-[#ffffffb8] normal-case text-center w-3/5">
          Our committed staff makes sure that there are digital strategies,
          compliance, and customized advice. We are a reliable partner for your
          digital success because of our quality and service.
        </p>
        <div className="flex flex-row gap-4 justify-center items-center">
          <Button className="text-base font-normal bg-[#ef8450] text-white p-8 capitalized">
            Get Started
          </Button>
          <Button className="text-base font-normal border-[#ef8450] bg-[#10393b] border-2 text-white p-8 capitalized">
            Contact Us
          </Button>
        </div>
      </div>
    </>
  );
};
