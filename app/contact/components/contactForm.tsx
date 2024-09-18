import CustomButton from "@/components/buttonUi";
export const ContactForm = () => {
  return (
    <div className="max-w-full max-w-[75%] mx-auto p-6">
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              <h4 className="text-lg font-bold text-[#10393b]">Name</h4>
            </label>
            <input
              className="w-full px-3  border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              placeholder="Ex. Purity Mwende"
              type="text"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              <h4 className="text-lg font-bold text-[#10393b]">
                Email Address
              </h4>
            </label>
            <input
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              placeholder="example@mail.com"
              type="email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="phone">
              <h4 className="text-lg font-bold text-[#10393b]">Phone Number</h4>
            </label>
            <input
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phone"
              placeholder="(123) 456 - 789"
              type="tel"
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="subject">
              <h4 className="text-lg font-bold text-[#10393b]">Subject</h4>
            </label>
            <input
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="subject"
              placeholder="What we can help with?"
              type="text"
            />
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            <h4 className="text-lg font-bold text-[#10393b]">Your Message</h4>
          </label>
          <textarea
            className="w-full px-3 py-4 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            placeholder="Leave Extra Message..."
            rows={6}
          />
        </div>
        <CustomButton
          backgroundColor="#ef8450"
          body="Send Message"
          href="/contact"
        />
      </form>
    </div>
  );
};
