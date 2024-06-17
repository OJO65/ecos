// BaseProductCarousel.js

import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const BaseProductCarousel = ({ title, link, items, itemRenderer, redBackground, textwhite }) => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -120,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 120,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative flex flex-col bg-white box-border shadow-lg rounded-md">
      <header className={`flex justify-between items-center p-3 rounded-t-md ${redBackground ? 'bg-red-500' : ''}`}>
        <h2 className="font-semibold text-lg ml-5">{title}</h2>
        <a href={link} className={`font-semibold underline text-orange-500 ${textwhite ? 'text-white' : ''}`}>
          SEE ALL
          <FontAwesomeIcon icon={faAngleRight} className="ml-1" />
        </a>
      </header>
      <div ref={carouselRef} className="flex -space-x-1 overflow-hidden no-scrollbar">
        {items.map((item, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            {itemRenderer(item)}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute left-0 ml-2 mt-36 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 text-gray-600" />
      </button>
      <button
        type="button"
        className="absolute right-0 mr-2 mt-36 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default BaseProductCarousel;
