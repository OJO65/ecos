import React, { useRef } from "react";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carousel2 = () => {
  const carouselItems = [
    { href: "https://www.jumia.co.ke/", imgSrc: vitronTv, alt: "Vitron Tv" },
    { href: "https://www.jumia.co.ke/", imgSrc: hikersTv, alt: "Hikers Tv" },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: infinixHot,
      alt: "Infinix Hot",
    },
    { href: "https://www.jumia.co.ke/", imgSrc: vitronTv, alt: "Vitron Tv" },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: vitronRadio,
      alt: "Vitron Radio",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: villaonPhone,
      alt: "Villaon Phone",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: samsungPhone,
      alt: "Samsung Phone",
    },
    { href: "https://www.jumia.co.ke/", imgSrc: hikers43, alt: "Hikers 43 TV" },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: ailyonsKettle,
      alt: "Ailyons Kettle",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: skyworthTv,
      alt: "Skyworth TV",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: samsungGalaxy,
      alt: "Samsung Galaxy",
    },
    { href: "https://www.jumia.co.ke/", imgSrc: nivea, alt: "Nivea" },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: starlink,
      alt: "Starlink Standard",
    },
    { href: "https://www.jumia.co.ke/", imgSrc: annov, alt: "Annov Mixer" },
    { href: "https://www.jumia.co.ke/", imgSrc: vision, alt: "Vision Plus TV" },
    { href: "https://www.jumia.co.ke/", imgSrc: amtec, alt: "Amtec TV" },
  ];

    const carouselRef = useRef(null);




  return 
    <div>
       <div>
    {carouselItems.map((item, index) => ())}
       </div>
    </div>; 
  
  
};

export default Carousel2;
