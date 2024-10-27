import Link from "next/link";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="px-4 py-8 md:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-4 bg-[#10393b] text-white p-2">
            <Image src="/logo.PNG" alt="Logo Image" width={26} height={26} />
            <h3 className="ml-2 text-xl font-bold">Pista Strategies</h3>
          </div>
          <p className="text-base text-[#7b7b7b]">
            We partner with you throughout your journey. We will help you
            brainstorm your idea, design and deliver your unique value to your
            customers. Our unique approach allows our clients to rapidly scale
            their business with full confidence.
          </p>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h5 className="text-[#10393b] text-lg font-semibold mb-4">Pages</h5>
          <ul className="space-y-2">
            {["Home", "About us", "Services", "Contact", "Blog"].map((item) => (
              <li key={item}>
                <Link
                  className="text-base text-[#7b7b7b] hover:text-gray-900"
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-1 md:col-span-1">
          <h5 className="text-[#10393b] text-lg font-semibold mb-4">
            Services
          </h5>
          <ul className="space-y-2">
            {[
              "SMes",
              "Business proposal",
              "Grant Application",
              "Business Valuation",
            ].map((item) => (
              <li key={item}>
                <Link
                  className="text-sm text-[#7b7b7b] hover:text-gray-900"
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
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
          <p className="text-base text-[#7b7b7b] mb-4">
            Subscribe to get a bunch of helpful stuff sent to your inbox
            directly.
          </p>
          <form className="flex flex-col">
            <input
              className="px-4 py-2 mb-2 text-base text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your mail here"
              type="email"
            />
            <button
              className="px-4 py-2 text-base text-white bg-orange-400 rounded-md hover:bg-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
              type="submit"
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
