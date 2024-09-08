import Image from "next/image";
export const TeamCard = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-start gap-2">
        <Image
          src="/person1.webp"
          width={345}
          height={345}
          alt="Picture of the author"
          className="rounded-[15px]"
        />
        <h4 className="text=[#10393b] text-xl font-semibold capitalize">
          Rufus Stewart
        </h4>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mt-0 capitalize">
          Chief Executive Officer
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-2">
        <Image
          src="/person2.webp"
          width={345}
          height={345}
          alt="Picture of the author"
          className="rounded-[15px]"
        />
        <h4 className="text=[#10393b] text-xl font-semibold capitalize">
          Juliana Silva
        </h4>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mt-0 capitalize">
          managing director
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-2">
        <Image
          src="/person3.webp"
          width={345}
          height={345}
          alt="Picture of the author"
          className="rounded-[15px]"
        />
        <h4 className="text=[#10393b] text-xl font-semibold capitalize">
          Richard Sanchez
        </h4>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mt-0 capitalize">
          head of marketing
        </p>
      </div>

      <div className="flex flex-col justify-center items-start gap-2">
        <Image
          src="/person4.webp"
          width={345}
          height={345}
          alt="Picture of the author"
          className="rounded-[15px]"
        />
        <h4 className="text=[#10393b] text-xl font-semibold capitalize">
          Sacha Dubois
        </h4>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mt-0 capitalize">
          general manager
        </p>
      </div>
    </div>
  );
};
