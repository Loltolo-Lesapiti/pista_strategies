import CustomButton from "./buttonUi";

export const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#10393b] rounded-[15px] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2 sm:mt-4 mb-2 sm:mb-4 text-white text-center w-full sm:w-4/5 lg:w-3/5">
          We love challenges big and small - whats yours?
        </h2>
        <p className="font-normal text-sm sm:text-base mt-2 sm:mt-4 mb-6 sm:mb-8 text-[#ffffffb8] normal-case text-center w-full sm:w-4/5 lg:w-3/5">
          Our committed staff makes sure that there are digital strategies,
          compliance, and customized advice. We are a reliable partner for your
          digital success because of our quality and service.
        </p>
        <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center w-full">
          <CustomButton
            backgroundColor="#ef8450"
            body=" Get Started"
            href="/contact"
          />
          <CustomButton
            backgroundColor="#10393b"
            body="Contact Us"
            href="/contact"
          />
        </div>
      </div>
    </>
  );
};
