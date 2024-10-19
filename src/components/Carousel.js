import React, { useState, useEffect } from 'react';

import kitchen from '../assets/kitchen.png';
import meat from '../assets/meat.jpg';
import salad from '../assets/salad.png';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      title: 'Our Premium Cuts',
      img: kitchen,
      description: 'Discover the finest cuts of meat, sourced directly from our farms.'
    },
    {
      title: 'Quality You Can Trust',
      img: meat,
      description: 'Experience the taste of quality with our selection of meats.'
    },
    {
      title: 'Satisfaction Guaranteed',
      img: salad,
      description: 'Join countless satisfied customers and elevate your dining experience.'
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div id="indicators-carousel" className="relative w-full md:w-4/5 lg:w-3/4 mx-auto" data-carousel="static">
      <div className="relative h-80 md:h-112 overflow-hidden rounded-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out ${index === currentIndex ? 'block' : 'hidden'}`}
            data-carousel-item={index === currentIndex ? 'active' : ''}
          >
            <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
              <h2 className="text-xl text-white">{item.title}</h2>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
            aria-current={index === currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black bg-opacity-50 group-hover:bg-opacity-70 transition">
          <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
