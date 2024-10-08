import Image from "next/image";

const ResponsiveNavbarLogo = () => {
  return (
    <div className="relative w-fit">
      <Image
        src="/logo2.PNG"
        alt="Logo Image"
        width={270}
        height={270}
        priority
        className="w-[120px] h-auto sm:w-[180px] md:w-[220px] lg:w-[270px] transition-all duration-300"
      />
    </div>
  );
};

export default ResponsiveNavbarLogo;
