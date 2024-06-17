import React, { useRef } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Carousel2 = () => {
  const carouselItems = [
    { href: "https://www.jumia.co.ke/", imgSrc: vitronTv, Name: "Vitron HTC3200S 32' ", Newprice: "Ksh 11,599", Oldprice: "Ksh 18,069", discount: "-36%", alt: "Vitron TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikersTv, Name: "Hikers SmartTv 32' ", Newprice: "Ksh 11,299", Oldprice: "Ksh 20,168", discount: "-44%", alt: "Hikers TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: infinixHot, Name: "Infinix Hot", Newprice: "Ksh 13,599", Oldprice: "Ksh 20,000", discount: "-32%", alt: "Infinix Hot" },
    { href: "https://www.jumia.co.ke/", imgSrc: vitronRadio, Name: "Vitron Music System", Newprice: "Ksh 5,460", Oldprice: "Ksh 7,599", discount: "-28%", alt: "Vitron Radio" },
    { href: "https://www.jumia.co.ke/", imgSrc: villaonPhone, Name: "Villaon Smart Phone", Newprice: "Ksh 6,288", Oldprice: "Ksh 7,999", discount: "-21%",  alt: "Villaon Phone" },
    { href: "https://www.jumia.co.ke/", imgSrc: samsungPhone, Name: "Samsung Galaxy Smart Phone", Newprice: "Ksh 13,398", Oldprice: "Ksh 13,990", discount: "-4%", alt: "Samsung Phone" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikers43, Name: "Hikers SmartTv 43' ", Newprice: "Ksh 11,550", Oldprice: "Ksh 15,995", discount: "-28%", alt: "Hikers 43 TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: ailyonsKettle, Name: "Ailyon E-kettle", Newprice: "Ksh 500", Oldprice: "Ksh 620", discount: "-5%", alt: "Ailyons Kettle" },
    { href: "https://www.jumia.co.ke/", imgSrc: skyworthTv, Name: "Skyworth SmartTv 32' ", Newprice: "Ksh 11,299", Oldprice: "Ksh 20,168", discount: "-44%", alt: "Skyworth TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: samsungGalaxy, Name: "Samsung Galaxy S3", Newprice: "Ksh 15,460", Oldprice: "Ksh 27,599", discount: "-36%", alt: "Samsung Galaxy" },
    { href: "https://www.jumia.co.ke/", imgSrc: nivea, Name: "Nivea Body Lotion", Newprice: "Ksh 764", Oldprice: "Ksh 1,000", discount: "-58%", alt: "Nivea" },
    { href: "https://www.jumia.co.ke/", imgSrc: starlink, Name: "Starlink Standard Satelitte", Newprice: "Ksh 45,500", Oldprice: "Ksh 100,000", discount: "-55%", alt: "Starlink Standard" },
    { href: "https://www.jumia.co.ke/", imgSrc: annov, Name: "Annov E-mixer", Newprice: "Ksh 8,460", Oldprice: "Ksh 17,599", discount: "-36%", alt: "Annov Mixer" },
    { href: "https://www.jumia.co.ke/", imgSrc: vision, Name: "Vision SmartTv 32' ", Newprice: "Ksh 45,460", Oldprice: "Ksh 27,599", discount: "-36%", alt: "Vision Plus TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: amtec, Name: "Amtec SmartTv 32' ", Newprice: "Ksh 65,460", Oldprice: "Ksh 37,599", discount: "-36%", alt: "Amtec TV" },
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
    <div className="relative flex flex-col bg-white box-border shadow-lg rounded-md">
      <header className="flex flex-row space-x-[1080px] rounded-md -mb-10" style={{ background: '#FFFFFF' }}>
        <div>
          <h2 className="font-semibold text-lg ml-3">Top selling items</h2>
        </div>
        <div>
          <a href="/recommended/" className="font-semibold underline text-orange-500 mr-3">
            SEE ALL
            <FontAwesomeIcon icon={faAngleRight} className='ml-1' />
            <svg viewBox="0 0 24 24" className="ic -f-or5" width="24" height="24">
              <use xlinkHref="https://www.jumia.co.ke/assets_he/images/i-icons.995b8ca3.svg#arrow-right"></use>
            </svg>
          </a>
        </div>
      </header>
      <div ref={carouselRef} className="flex -space-x-1 overflow-hidden no-scrollbar">
        {carouselItems.map((item, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            <a
              className="block rounded-lg hover:shadow-lg"
              href={item.href}
              data-track-onclick="eecPromo"
            >
              <div className="aspect-w-1 aspect-h-1 w-[193.33px] border shadow-lg relative">
                <img
                  className="rounded-lg"
                  src={item.imgSrc}
                  alt={item.alt}
                />
                <span className='absolute -top-3 ml-40 text-red-600 border bg-slate-200'>{item.discount}</span>
              </div>
              <div className=" text-left mt-2">
                <p className="text-sm text-gray-600">{item.Name}</p>
                <p className="text-md text-gray-600 font-bold">{item.Newprice}</p>
                <p className="text-sm text-gray-400 line-throug">{item.Oldprice}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button 
        type="button" 
        className=" mt-32 absolute left-0 ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 text-gray-600" />
      </button>
      <button 
        type="button" 
        className=" mt-32 absolute right-0 mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}

export default Carousel2;
