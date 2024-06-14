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
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Carousel2 = () => {
  const carouselItems = [
    { href: "https://www.jumia.co.ke/", imgSrc: vitronTv, alt: "Vitron TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikersTv, alt: "Hikers TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: infinixHot, alt: "Infinix Hot" },
    { href: "https://www.jumia.co.ke/", imgSrc: vitronRadio, alt: "Vitron Radio" },
    { href: "https://www.jumia.co.ke/", imgSrc: villaonPhone, alt: "Villaon Phone" },
    { href: "https://www.jumia.co.ke/", imgSrc: samsungPhone, alt: "Samsung Phone" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikers43, alt: "Hikers 43 TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: ailyonsKettle, alt: "Ailyons Kettle" },
    { href: "https://www.jumia.co.ke/", imgSrc: skyworthTv, alt: "Skyworth TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: samsungGalaxy, alt: "Samsung Galaxy" },
    { href: "https://www.jumia.co.ke/", imgSrc: nivea, alt: "Nivea" },
    { href: "https://www.jumia.co.ke/", imgSrc: starlink, alt: "Starlink Standard" },
    { href: "https://www.jumia.co.ke/", imgSrc: annov, alt: "Annov Mixer" },
    { href: "https://www.jumia.co.ke/", imgSrc: vision, alt: "Vision Plus TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: amtec, alt: "Amtec TV" },
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
    <div className="relative w-full flex flex-col bg-white">
      <header className="flex flex-row space-x-[1100px] mr-auto ml-auto -mh-48px" style={{ background: '#FFFFFF' }}>
        <div className="cola -df -i-ctr -oh">
          <h2 className="-m -fs20 -elli">Top selling items</h2>
        </div>
        <div className="col -df -j-end -fsh0">
          <a href="/recommended/" className=" underline text-orange-600">
          See All
          <FontAwesomeIcon icon={faArrowRight} className='ml-1' />
            <svg viewBox="0 0 24 24" className="ic -f-or5" width="24" height="24">
              <use xlinkHref="https://www.jumia.co.ke/assets_he/images/i-icons.995b8ca3.svg#arrow-right"></use>
            </svg>
          </a>
        </div>
      </header>
      <div ref={carouselRef} className="flex -space-x-1 overflow-x-scroll no-scrollbar">
        {carouselItems.map((item, index) => (
          <div key={index} className="p-2 flex-shrink-0">
            <a
              className="block rounded-lg hover:shadow-lg"
              href={item.href}
              data-track-onclick="eecPromo"
            >
              <div className="aspect-w-1 aspect-h-1 w-[120px]">
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
      <button 
        type="button" 
        className="mt-24 absolute left-0 ml-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 text-gray-600" />
      </button>
      <button 
        type="button" 
        className="mt-24 absolute right-0 mr-2 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
}

export default Carousel2;
