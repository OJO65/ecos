import React from 'react'
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

  return (
    <div className="relative w-full flex overflow-hidden items-center">
      <div className="flex space-x-4">
        {carouselItems.map((item, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            <a
              className="block rounded-lg hover:shadow-lg"
              href={item.href}
              data-track-onclick="eecPromo"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  className="rounded-lg"
                  src={item.imgSrc}
                  alt={item.alt}
                />
              </div>
            </a>
          </div>
        ))}
      </div>
      <button type="button" className="absolute left-0 ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <use xlinkHref="https://www.jumia.co.ke/assets_he/images/i-icons.995b8ca3.svg#arrow-left"></use>
        </svg>
      </button>
      <button type="button" className="absolute right-0 mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300">
        <svg viewBox="0 0 24 24" className="w-6 h-6">
          <use xlinkHref="https://www.jumia.co.ke/assets_he/images/i-icons.995b8ca3.svg#arrow-right"></use>
        </svg>
      </button>
    </div>
  )
}

export default Carousel;
