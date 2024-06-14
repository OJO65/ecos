import React, { useRef } from 'react';
import gifscroll from "../Assets/img/gifscroll.gif";
import flash from "../Assets/img/FlashSaleLP.png";
import free from "../Assets/img/Freedelivery.png";
import rated from "../Assets/img/Toprated.png";
import day from "../Assets/img/Delivery.png";
import tv from "../Assets/img/Televisions.png";
import phone from "../Assets/img/Smartphones.png";
import large from "../Assets/img/LargeAppliances.png";
import small from "../Assets/img/SmallAppliances.png";
import homeoffice from "../Assets/img/HomeOffice.png";
import computing from "../Assets/img/Computing.png";
import mens from "../Assets/img/MenFashion.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const carouselItems = [
    { href: "https://www.jumia.co.ke/mlp-anniversary/", imgSrc: gifscroll, alt: "JA" },
    { href: "https://www.jumia.co.ke/flash-sales/", imgSrc: flash, alt: "Flash Sale" },
    { href: "https://www.jumia.co.ke/mlp-free-delivery/", imgSrc: free, alt: "Freedelivery" },
    { href: "https://www.jumia.co.ke/mlp-top-deals/", imgSrc: rated, alt: "Top Deals" },
    { href: "https://www.jumia.co.ke/mlp-fulfilled-by-jumia/", imgSrc: day, alt: "FBJ" },
    { href: "https://www.jumia.co.ke/televisions/", imgSrc: tv, alt: "Televisions" },
    { href: "https://www.jumia.co.ke/smartphones/", imgSrc: phone, alt: "Smartphones" },
    { href: "https://www.jumia.co.ke/home-improvement-appliances/", imgSrc: large, alt: "Large Appliances" },
    { href: "https://www.jumia.co.ke/small-appliances/", imgSrc: small, alt: "Small Appliances" },
    { href: "https://www.jumia.co.ke/home-office/", imgSrc: homeoffice, alt: "Home & Office" },
    { href: "https://www.jumia.co.ke/computing/", imgSrc: computing, alt: "Computing" },
    { href: "https://www.jumia.co.ke/mens-fashion/", imgSrc: mens, alt: "Men's Fashion" },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative w-full flex overflow-hidden items-center bg-white">
      <div ref={carouselRef} className="flex -space-x-1 overflow-x-hidden no-scrollbar">
        {carouselItems.map((item, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            <a
              className="block rounded-md hover:shadow-md"
              href={item.href}
              data-track-onclick="eecPromo"
            >
              <div className="aspect-w-1 aspect-h-1 w-[120px]">
                <img
                  className="rounded-md"
                  src={item.imgSrc}
                  alt={item.alt}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
      <button 
        type="button" 
        className="absolute left-0 ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 text-gray-600" />
      </button>
      <button 
        type="button" 
        className="absolute right-0 mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  )
}

export default Carousel;
