import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const sliderData = [
  {
    image: 'image2.png',
    title: 'Five Students Got 55 LPA Package',
    description: 'This achievement not only underscores the student’s hard work and dedication but also reflects the robust training and industry-aligned curriculum provided by GIM.',
  },
  {
    image: 'image1.JPG',
    title: 'President Visit to NIT Raipur',
    description: 'All students are informed that the 14th Convocation is being held on 25 October 2024, with online registration from 12 October to 22 October.',
  },
  {
    image: 'image3.png',
    title: 'Candle March at NIT Raipur',
    description: 'A candle march is a peaceful demonstration to show support for a cause, demand justice, or commemorate victims of tragedies.',
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const prevSlide = useRef(currentSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideRef.current) {
      const direction = currentSlide > prevSlide.current ? 1 : -1;
      gsap.fromTo(
        slideRef.current,
        { x: direction * 100 + '%', opacity: 0 },
        { x: '0%', opacity: 1, duration: 1.5, ease: 'power1.out' } // smoother scrolling effect
      );
      prevSlide.current = currentSlide;
    }
  }, [currentSlide]);

  return (
    <div className="relative w-[100vw] h-[100vh] mx-auto px-[5%] overflow-hidden rounded-lg">
      <div className="relative w-full h-[700px]">
        <div ref={slideRef} className="absolute w-full h-full">
          <img
            src={sliderData[currentSlide].image}
            alt={sliderData[currentSlide].title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Text overlay */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-opacity-60 text-white p-6 rounded-md text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-2">{sliderData[currentSlide].title}</h2>
          <p className="text-sm">{sliderData[currentSlide].description}</p>
        </div>
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;