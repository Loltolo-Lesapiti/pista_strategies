import CustomButton from "@/components/buttonUi";
export const ContactForm = () => {
  return (
    <div className="max-w-full max-w-[75%] mx-auto p-6">
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              <h4 className="text-lg font-bold text-[#10393b]">Name</h4>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ex. Purity Mwende"
              className="w-full px-3  border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">
              <h4 className="text-lg font-bold text-[#10393b]">
                Email Address
              </h4>
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block mb-1">
              <h4 className="text-lg font-bold text-[#10393b]">Phone Number</h4>
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="(123) 456 - 789"
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1">
              <h4 className="text-lg font-bold text-[#10393b]">Subject</h4>
            </label>
            <input
              type="text"
              id="subject"
              placeholder="What we can help with?"
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            <h4 className="text-lg font-bold text-[#10393b]">Your Message</h4>
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Leave Extra Message..."
            className="w-full px-3 py-4 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
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
