import Image from "next/image";
export const ContactDetails = () => {
  const details = [
    {
      icon: "/contact1.webp",
      title: "Our location",
      lines: ["Flawing Street, The Grand Avenue,", "Liverpool, UK 33342"],
    },
    {
      icon: "/contact2.webp",
      title: "Send an email",
      lines: ["contact@appsupport.com", "gradia@support.com"],
    },
    {
      icon: "/contact3.webp",
      title: "Call us",
      lines: ["(+42) 235 - 2345 - 789", "(+42) 678 - 2345 - 789"],
    },
  ];

  return (
    <div className="w-full max-w-[75%] flex flex-col md:flex-row gap-4 justify-center items-stretch">
      {details.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-8 gap-4 bg-white rounded-lg shadow-md w-full md:w-1/3 rounded-[15px]"
        >
          <div className="flex justify-center items-center">
            <Image
              src={item.icon}
              width={50}
              height={50}
              alt={item.title}
              className=""
            />
          </div>
          <h4 className="text-lg font-bold text-[#10393b]">{item.title}</h4>
          {item.lines.map((line, lineIndex) => (
            <p
              key={lineIndex}
              className="text-gray-600 text-normal text-center"
            >
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;