import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BaseCarousel = ({ items, itemRenderer }) => {
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
    <div className="relative flex overflow-hidden items-center bg-white box-border shadow-lg mr-5 ml-5 rounded-md">
      <div ref={carouselRef} className="flex -space-x-2 overflow-x-hidden no-scrollbar ml-10 mr-10">
        {items.map((item, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            {itemRenderer(item)}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute left-0 ml-2 mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 text-gray-600" />
      </button>
      <button
        type="button"
        className="absolute right-0 ml-2 mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default BaseCarousel;
