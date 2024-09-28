"use client";
import React, { useState } from "react";

import CustomButton from "@/components/buttonUi";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-[75%] mx-auto p-6">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1" htmlFor="name">
              <h4 className="text-lg font-bold text-[#10393b]">Name</h4>
            </label>
            <input
              className="w-full px-3 border border-gray-300 py-4 rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              placeholder="Ex. Purity Mwende"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
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
              value={formData.email}
              onChange={handleChange}
              required
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
              value={formData.phone}
              onChange={handleChange}
              required
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
              value={formData.subject}
              onChange={handleChange}
              required
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
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton
          backgroundColor="#ef8450"
          body="Send Message"
          type="submit"
        />
      </form>
    </div>
  );
};
