import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: './image/q7.png',
    title: 'Cosmetic Products',
    description:
      'Enhance your natural beauty with our skin-friendly, high-performance cosmetics — perfect for every look: bold, subtle, or in between.',
  },
  {
    image: './image/q15.png',
    title: 'Consumer Electronics',
    description:
      'Experience the future of technology with our premium consumer electronics — smart, sleek, and built for everyday life.',
  },
  {
    image: './image/q9.png',
    title: 'Healthcare & Pharma',
    description:
      'Empowering healthier lives with accessible, affordable, and expert healthcare solutions. Because everyone deserves quality care they can rely on.',
  },
];

const IndustryExpertise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Heading */}
      <div className="w-full max-w-6xl mb-10">
        <h1 className="text-4xl font-bold">
          <span className="text-blue-700">Industry</span>{' '}
          <span className="text-yellow-500">Expertise</span>
        </h1>
        <div className="h-1 w-36 bg-blue-600 mt-2"></div>
      </div>

      {/* Slider Container */}
      <div className="relative w-full max-w-6xl flex bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="object-cover w-full h-full transition-all duration-700 opacity-90 hover:opacity-100"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-10 text-center lg:text-left">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">
            {currentSlide.title}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {currentSlide.description}
          </p>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 hover:bg-gray-100"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="flex space-x-2 mt-6">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default IndustryExpertise;
