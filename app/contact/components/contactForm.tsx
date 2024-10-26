"use client";
import { useFormState } from "react-dom";

import CustomButton from "@/components/buttonUi";
import contactFormAction from "@/app/data/contact";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
const INITIAL_STATE = {
  data: null,
};

export const ContactForm: React.FC = () => {
  const [formState, formAction] = useFormState(
    contactFormAction,
    INITIAL_STATE
  );
  console.log(formState);

  return (
    <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-[75%] mx-auto p-2 sm:p-4 md:p-6">
      <form action={formAction} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              <h4 className="text-base sm:text-lg font-bold text-[#10393b]">
                Name
              </h4>
            </label>
            <input
              className="w-full px-2 sm:px-3 border border-gray-300 py-3 sm:py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              placeholder="Ex. Jon Allan"
              type="text"
              name="name"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">
              <h4 className="text-base sm:text-lg font-bold text-[#10393b]">
                Email Address
              </h4>
            </label>
            <input
              className="w-full px-2 sm:px-3 border border-gray-300 py-3 sm:py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              placeholder="example@mail.com"
              type="email"
              name="email"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="phone">
              <h4 className="text-base sm:text-lg font-bold text-[#10393b]">
                Phone Number
              </h4>
            </label>
            <input
              className="w-full px-2 sm:px-3 border border-gray-300 py-3 sm:py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phone"
              placeholder="(+254) 115-854-143"
              type="tel"
              name="phone"
              required
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="subject">
              <h4 className="text-base sm:text-lg font-bold text-[#10393b]">
                Subject
              </h4>
            </label>
            <input
              className="w-full px-2 sm:px-3 border border-gray-300 py-3 sm:py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="subject"
              placeholder="What we can help with?"
              type="text"
              name="subject"
              required
            />
          </div>
        </div>
        <div>
          <label className="block mb-1" htmlFor="message">
            <h4 className="text-base sm:text-lg font-bold text-[#10393b]">
              Your Message
            </h4>
          </label>
          <textarea
            className="w-full px-2 sm:px-3 py-3 sm:py-4 border border-gray-300 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            placeholder="Leave Extra Message..."
            rows={6}
            name="message"
            required
          />
        </div>
        <div className="w-full sm:w-auto">
          <CustomButton
            backgroundColor="#ef8450"
            body="Send Message"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};
