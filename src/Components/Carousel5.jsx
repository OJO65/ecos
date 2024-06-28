import React from 'react';
import BaseCarousel from './BaseCarousel';
import Phones from '../Assets/img/halfprice/Phones_Tabletss.png';
import Tvs from '../Assets/img/halfprice/Electronics.png';
import LargeAppliances from '../Assets/img/halfprice/LargeAppliances.png';
import Beauty from '../Assets/img/halfprice/BeautyRSV.png';
import Women from '../Assets/img/halfprice/WomensFashion.png';
import Men from '../Assets/img/halfprice/MensFashion.png';
import HomeAudio from '../Assets/img/halfprice/HomeAudio.png';
import Sports from '../Assets/img/halfprice/SportsFitness.png';
import SmallAppliances from '../Assets/img/halfprice/SmallAppliances.png';
import Grocery from '../Assets/img/halfprice/Groceries.png';
import Computing from '../Assets/img/halfprice/Computing.png';

const Carousel5 = () => {
  const items = [
    {
      imgSrc: Phones,
      Name: "Phones & Tablets",
    },
    {
      imgSrc: Tvs,
      Name: "Electronics",
    },
    {
      imgSrc: LargeAppliances,
      Name: "Large Appliances",
    },
    {
      imgSrc: Beauty,
      Name: "Beauty",
    },
    {
      imgSrc: Women,
      Name: "Women's Fashion",
    },
    {
      imgSrc: Men,
      Name: "Men's Fashion",
    },
    {
      imgSrc: HomeAudio,
      Name: "Home Audio",
    },
    {
      imgSrc: Sports,
      Name: "Sports & Fitness",
    },
    {
      imgSrc: SmallAppliances,
      Name: "Small Appliances"
    },
    {
      imgSrc: Grocery,
      Name: "Groceries",
    },
    {
      imgSrc: Computing,
      Name: "Computing"
    },
  ];

  const itemRenderer = (item) => (
    <div>
    <img src={item.imgSrc} alt="carousel item" className="w-[120px] h-auto rounded-md" />
    <p className="text-md text-center font-semibold text-gray-600">{item.Name}</p>
    </div>
  );

  return (
    <div>
        <header className='bg-red-600 max-w-full ml-[20px] mr-[20px] p-2'>
            <h1 className='text-center text-white font-bold mr-auto ml-auto'>Half Price Shop||50% OFF!</h1>
        </header>
      <BaseCarousel items={items} itemRenderer={itemRenderer} />
    </div>
  );
};

export default Carousel5;
