import Link from "next/link";

import { Logo } from "@/components/icons";

const FooterComponent = () => {
  return (
    <div className="flex justify-center items-start gap-8">
      <div className="w-1/2 flex flex-col justify-center items-start">
        <div className="flex flex-row justify-start mb-4">
          <Logo />
          <h3 className="ml-2 text-xl font-bold">ACME</h3>
        </div>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mr-10">
          Your digital vision, our creative mission, partner with us to build
          brands that thrive online with cutting-edge technology and insightful
          marketing.
        </p>
      </div>

      <div className="w-1/4">
        <h5 className="text=[#10393b] text-xl font-semibold capitalize mb-4">
          Pages
        </h5>
        <ul className="space-y-2">
          {["Home", "About us", "Portfolio", "Contact", "Blog"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/4">
        <h5 className="text=[#10393b] text-xl font-semibold capitalize mb-4">
          Utility pages
        </h5>
        <ul className="space-y-2">
          {["Style Guide", "Licences", "Changelog"].map((item) => (
            <li key={item}>
              <Link
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-1/2">
        <h5 className="text=[#10393b] text-xl font-semibold capitalize mb-4">
          Newsletter
        </h5>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mb-4">
          Subscribe to get a bunch of helpful stuff sent to your inbox directly.
        </p>
        <form className="flex">
          <input
            type="email"
            placeholder="Your mail here"
            aria-label="Email for newsletter"
            className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-orange-400 text-white rounded-r-lg hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FooterComponent;
