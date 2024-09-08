"use client";
import React, { useState, useEffect } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { ChevronIcon, ChevronRightIcon } from "@nextui-org/shared-icons";

import { StarIcon } from "./icons";

interface Testimonial {
  rating: number;
  quote: string;
  author: string;
  position: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Our site is now more user-friendly and ranks higher on search engines, leading to increased organic traffic and leads. The team is professional, creative, and committed to delivering exceptional results.",
    author: "Richard Sanchez",
    position: "Head of Marketing",
  },
  {
    rating: 4,
    quote:
      "The redesign of our e-commerce platform has significantly improved user engagement and conversion rates. Their attention to detail is impressive.",
    author: "Emily Chen",
    position: "E-commerce Manager",
  },
  {
    rating: 5,
    quote:
      "Their SEO strategies have boosted our online visibility dramatically. We've seen a substantial increase in quality leads since working with them.",
    author: "Michael Johnson",
    position: "Digital Marketing Director",
  },
  {
    rating: 5,
    quote:
      "The team's expertise in UI/UX design has transformed our app. User satisfaction scores have improved by 40% since the redesign.",
    author: "Sarah Thompson",
    position: "Product Owner",
  },
  {
    rating: 4,
    quote:
      "Their content marketing strategy has helped us establish thought leadership in our industry. The quality and consistency of content delivery are outstanding.",
    author: "David Rodriguez",
    position: "Content Strategy Lead",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Card className="w-2/5 bg-white py-[45px] h-[455px] rounded-[15px] px-[80px] ">
      <CardBody className="flex flex-col items-start justify-center gap-4">
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              filled={i < currentTestimonial.rating}
              className={
                i < currentTestimonial.rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mt-0 capitalize">
          "{currentTestimonial.quote}"
        </p>
        <h4 className="text=[#10393b] text-xl font-semibold capitalize">
          {currentTestimonial.author}
        </h4>
        <p className="font-normal text-base max-w-fit text-[#7b7b7b] normal-case mt-0 capitalize">
          {currentTestimonial.position}
        </p>
      </CardBody>
      <CardFooter className="justify-end pt-0">
        <button
          onClick={prevSlide}
          className="mx-2 p-2 rounded-full border-[2px] border-[#ef8450]"
        >
          <ChevronIcon className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="mx-2 p-2 rounded-full border-[2px] border-[#ef8450]"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default TestimonialSlider;
