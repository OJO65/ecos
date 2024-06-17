import React from 'react';
import BaseProductCarousel from './BaseProductCarousel';
import vitronTv from "../Assets/img/vitronTv.jpg";
import hikersTv from "../Assets/img/hikersTv.jpg";
import infinixHot from "../Assets/img/Hotinfinix.jpg";
import vitronRadio from "../Assets/img/vitronRadio.jpg";
import villaonPhone from "../Assets/img/villaonPhone.jpg";
import samsungPhone from "../Assets/img/samsungPhone.jpg";
import hikers43 from "../Assets/img/hikers43.jpg";
import ailyonsKettle from "../Assets/img/ailyonsKettle.jpg";
import skyworthTv from "../Assets/img/skyworthTv.jpg";
import samsungGalaxy from "../Assets/img/samsungGalaxy.jpg";
import nivea from "../Assets/img/Nivea.jpg";
import starlink from "../Assets/img/starlinkStandard.jpg";
import annov from "../Assets/img/annovMixer.jpg";
import vision from "../Assets/img/visionPlusTv.jpg";
import amtec from "../Assets/img/amtecTv.jpg";

const Carousel2 = () => {
  const carouselItems = [
    { href: "https://www.jumia.co.ke/", imgSrc: vitronTv, Name: "Vitron HTC3200S 32' ", Newprice: "Ksh 11,599", Oldprice: "Ksh 18,069", discount: "-36%", alt: "Vitron TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikersTv, Name: "Hikers SmartTv 32' ", Newprice: "Ksh 11,299", Oldprice: "Ksh 20,499", discount: "-45%", alt: "Hikers TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: infinixHot, Name: "Infinix Hot 30i", Newprice: "Ksh 14,599", Oldprice: "Ksh 18,599", discount: "-22%", alt: "Infinix Hot 30i" },
    { href: "https://www.jumia.co.ke/", imgSrc: vitronRadio, Name: "Vitron V636 Radio ", Newprice: "Ksh 1,199", Oldprice: "Ksh 1,499", discount: "-20%", alt: "Vitron V636 Radio" },
    { href: "https://www.jumia.co.ke/", imgSrc: villaonPhone, Name: "Villaon Caffe Phone", Newprice: "Ksh 1,539", Oldprice: "Ksh 1,899", discount: "-19%", alt: "Villaon Caffe Phone" },
    { href: "https://www.jumia.co.ke/", imgSrc: samsungPhone, Name: "Samsung Galaxy A14", Newprice: "Ksh 22,999", Oldprice: "Ksh 25,999", discount: "-12%", alt: "Samsung Galaxy A14" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikers43, Name: "Hikers SmartTv 43' ", Newprice: "Ksh 19,299", Oldprice: "Ksh 40,499", discount: "-52%", alt: "Hikers SmartTv 43' " },
    { href: "https://www.jumia.co.ke/", imgSrc: ailyonsKettle, Name: "Ailyons Electric Kettle", Newprice: "Ksh 1,299", Oldprice: "Ksh 1,599", discount: "-19%", alt: "Ailyons Electric Kettle" },
    { href: "https://www.jumia.co.ke/", imgSrc: skyworthTv, Name: "Skyworth 43 Inch", Newprice: "Ksh 22,999", Oldprice: "Ksh 35,999", discount: "-36%", alt: "Skyworth 43 Inch" },
    { href: "https://www.jumia.co.ke/", imgSrc: samsungGalaxy, Name: "Samsung Galaxy A04E", Newprice: "Ksh 13,599", Oldprice: "Ksh 14,599", discount: "-7%", alt: "Samsung Galaxy A04E" },
    { href: "https://www.jumia.co.ke/", imgSrc: nivea, Name: "Nivea Men", Newprice: "Ksh 399", Oldprice: "Ksh 1,499", discount: "-73%", alt: "Nivea Men" },
    { href: "https://www.jumia.co.ke/", imgSrc: starlink, Name: "Starlink Standard Kit", Newprice: "Ksh 59,999", Oldprice: "Ksh 79,999", discount: "-25%", alt: "Starlink Standard Kit" },
    { href: "https://www.jumia.co.ke/", imgSrc: annov, Name: "Annov 5L Mixer", Newprice: "Ksh 9,099", Oldprice: "Ksh 11,599", discount: "-22%", alt: "Annov 5L Mixer" },
    { href: "https://www.jumia.co.ke/", imgSrc: vision, Name: "Vision Plus 32' ", Newprice: "Ksh 12,999", Oldprice: "Ksh 21,199", discount: "-39%", alt: "Vision Plus 32' " },
    { href: "https://www.jumia.co.ke/", imgSrc: amtec, Name: "Amtec 43' ", Newprice: "Ksh 19,999", Oldprice: "Ksh 31,299", discount: "-36%", alt: "Amtec 43' " },
  ];

  const renderItem = (item) => (
    <a className="block rounded-md border w-[185px]" href={item.href}>
      <div className="relative">
      <span className="text-xs text-red-500 border p-[3px] bg-gray-300 ml-[145px]">{item.discount}</span>
        <img className="w-full h-auto rounded-md p-2" src={item.imgSrc} alt={item.alt} />
        <div className="p-2">
          <h3 className="text-sm font-semibold">{item.Name}</h3>
          <p className="text-sm text-red-500 font-semibold">{item.Newprice}</p>
          <p className="text-xs line-through text-gray-500">{item.Oldprice}</p>
        </div>
      </div>
    </a>
  );

  return <BaseProductCarousel title="New Arrivals" link="https://www.jumia.co.ke/" items={carouselItems} itemRenderer={renderItem} />;
};

export default Carousel2;
