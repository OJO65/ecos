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
    Phones,
    Tvs,
    LargeAppliances,
    Beauty,
    Women,
    Men,
    HomeAudio,
    Sports,
    SmallAppliances,
    Grocery,
    Computing,
  ];

  const itemRenderer = (item) => (
    
    <img src={item} alt="carousel item" className="w-[120px] h-auto rounded-md" />
    
  );

  return (
    <div>
        <header className='bg-red-600 ml-[20px] mr-[20px] p-2 rounded-md'>
            <h1 className='text-center text-white font-bold'>Half Price Shop||50% OFF!</h1>
        </header>
      <BaseCarousel items={items} itemRenderer={itemRenderer} />
    </div>
  );
};

export default Carousel5;
