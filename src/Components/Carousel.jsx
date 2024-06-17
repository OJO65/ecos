import React from 'react';
import BaseCarousel from './BaseCarousel';
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

  const renderItem = (item) => (
    <a className="block rounded-lg shadow-lg hover:shadow-md" href={item.href} data-track-onclick="eecPromo">
      <div className="aspect-w-1 aspect-h-1 w-[120px]">
        <img className="rounded-md" src={item.imgSrc} alt={item.alt} />
      </div>
    </a>
  );

  return <BaseCarousel items={carouselItems} itemRenderer={renderItem} />;
};

export default Carousel;
