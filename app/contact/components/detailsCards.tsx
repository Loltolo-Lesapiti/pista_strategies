import Image from "next/image";
export const ContactDetails = () => {
  const details = [
    {
      icon: "/contact1.webp",
      title: "North Airport Road",
      lines: ["TEJ Center, off  Eastern bypass,"],
    },
    {
      icon: "/contact2.webp",
      title: "Send an email",
      lines: ["pistastrategies@gmail.com"],
    },
    {
      icon: "/contact3.webp",
      title: "Call us",
      lines: ["(+254) 115 - 854 - 143", ],
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
              alt={item.title}
              className=""
              height={50}
              src={item.icon}
              width={50}
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
