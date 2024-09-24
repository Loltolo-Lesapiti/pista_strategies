export const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center md:gap-16 relative pt-[110px]">
      <div className="flex flex-col items-center justify-items-start shrink-0 px-4 md:px-0 md:pt-8 md:w-1/2">
        <h3 className="text-white font-medium py-2 px-8 bg-[#ffffff38] text-base rounded-lg max-w-fit uppercase mb-6">
          About Pista Strategies
        </h3>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white capitalize text-center">
          Your Partner from an Idea to Market Leader
        </h1>
      </div>
    </div>
  );
};
