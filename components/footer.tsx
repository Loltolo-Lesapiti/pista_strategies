import Link from "next/link";

import { Logo } from "@/components/icons";

const FooterComponent = () => {
  return (
    <footer className="px-4 py-8 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-4">
            <Logo />
            <h3 className="ml-2 text-xl font-bold">Gradia</h3>
          </div>
          <p className="text-sm text-[#7b7b7b]">
            Your digital vision, our creative mission, partner with us to build
            brands that thrive online with cutting-edge technology and
            insightful marketing.
          </p>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h5 className="text-[#10393b] text-lg font-semibold mb-4">Pages</h5>
          <ul className="space-y-2">
            {["Home", "About us", "Portfolio", "Contact", "Blog"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-[#7b7b7b] hover:text-gray-900"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h5 className="text-[#10393b] text-lg font-semibold mb-4">
            Utility pages
          </h5>
          <ul className="space-y-2">
            {["Style Guide", "Licences", "Changelog"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm text-[#7b7b7b] hover:text-gray-900"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h5 className="text-[#10393b] text-lg font-semibold mb-4">
            Newsletter
          </h5>
          <p className="text-sm text-[#7b7b7b] mb-4">
            Subscribe to get a bunch of helpful stuff sent to your inbox
            directly.
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Your mail here"
              className="px-4 py-2 mb-2 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="px-4 py-2 text-sm text-white bg-orange-400 rounded-md hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-[#7b7b7b]">
        <div className="flex flex-col md:flex-row justify-center items-center text-sm text-[#7b7b7b]">
          <p>Developed by Petro</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
