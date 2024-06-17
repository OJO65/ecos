import React from "react";
import BaseProductCarousel from "./BaseProductCarousel";
import blender from "../Assets/img/flash/blender.jpg";
import menengai from "../Assets/img/flash/menengai.jpg";
import dettol from "../Assets/img/flash/dettol.jpg";
import dettol2 from "../Assets/img/flash/dettol2.jpg";
import vaseline from "../Assets/img/flash/vaseline.jpg";
import Harpic from "../Assets/img/flash/harpic.jpg";
import sunlight from "../Assets/img/flash/sunlight.jpg";
import samsung from "../Assets/img/flash/samsungGalaxy.jpg";
import maybelline from "../Assets/img/flash/maybelline.jpg";
import valon from "../Assets/img/flash/valon.jpg";
import royco from "../Assets/img/flash/royco.jpg";
import freshfri from "../Assets/img/flash/freshfri.jpg";
import oraimo from "../Assets/img/flash/oraimo.jpg";
import omo from "../Assets/img/flash/omo.jpg";
import ko from "../Assets/img/flash/ko.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const Carousel3 = () => {
  const carouselItems = [
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: blender,
      Name: "Vitron VB-766 Blender",
      Newprice: "Ksh 1960",
      Oldprice: "Ksh 3000",
      discount: "-34%",
      alt: "Blender",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: menengai,
      Name: "Menengai Cream Bar Soap",
      Newprice: "Ksh 189",
      Oldprice: "Ksh 277",
      discount: "-32%",
      alt: "Menengai",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: dettol,
      Name: "Dettol Multi Action 1ltr",
      Newprice: "Ksh 110",
      Oldprice: "Ksh 150",
      discount: "-27%",
      alt: "Dettol",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: dettol2,
      Name: "Dettol Multi Action 750ml",
      Newprice: "Ksh 340",
      Oldprice: "Ksh 400",
      discount: "-15%",
      alt: "Dettol 2",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: vaseline,
      Name: "Vaseline Petrolium Jelly",
      Newprice: "Ksh 250",
      Oldprice: "Ksh 300",
      discount: "-17%",
      alt: "Vaseline",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: Harpic,
      Name: "Harpic Bathroom Cleaner",
      Newprice: "Ksh 390",
      Oldprice: "Ksh 450",
      discount: "-13%",
      alt: "Harpic",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: sunlight,
      Name: "Sunlight Scourer Lemon 500g",
      Newprice: "Ksh 200",
      Oldprice: "Ksh 250",
      discount: "-20%",
      alt: "Sunlight",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: samsung,
      Name: "Samsung Galaxy SmartPhone",
      Newprice: "Ksh 15460",
      Oldprice: "Ksh 27599",
      discount: "-44%",
      alt: "Samsung Galaxy",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: maybelline,
      Name: "Maybeline LipGloss",
      Newprice: "Ksh 750",
      Oldprice: "Ksh 1000",
      discount: "-25%",
      alt: "Maybelline",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: valon,
      Name: "Valon Petrolium Jelly",
      Newprice: "Ksh 560",
      Oldprice: "Ksh 799",
      discount: "-30%",
      alt: "Valon",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: royco,
      Name: "Royco Choma",
      Newprice: "Ksh 70",
      Oldprice: "Ksh 100",
      discount: "-30%",
      alt: "Royco",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: freshfri,
      Name: "Fresh Fri Cooking Oil 1ltr",
      Newprice: "Ksh 110",
      Oldprice: "Ksh 150",
      discount: "-27%",
      alt: "FreshFri",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: oraimo,
      Name: "Oraimo BlueTooth Earpiece",
      Newprice: "Ksh 1500",
      Oldprice: "Ksh 2000",
      discount: "-25%",
      alt: "Oraimo",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: omo,
      Name: "OMO detergent",
      Newprice: "Ksh 400",
      Oldprice: "Ksh 500",
      discount: "-20%",
      alt: "OMO",
    },
    {
      href: "https://www.jumia.co.ke/",
      imgSrc: ko,
      Name: "K.O Beer pack",
      Newprice: "Ksh 50",
      Oldprice: "Ksh 70",
      discount: "-28%",
      alt: "Ko",
    },
  ];

  const itemRenderer = (item) => (
    <a
      className="block rounded-lg hover:shadow-lg"
      href={item.href}
      data-track-onclick="eecPromo"
    >
      <div className="aspect-w-1 border shadow-lg aspect-h-1 w-[193.33px] relative">
        <img
          className="rounded-lg object-cover"
          src={item.imgSrc}
          alt={item.alt}
        />
        <span className="absolute -top-3 ml-40 shadow-lg text-red-600 border bg-slate-200">
          {item.discount}
        </span>
      </div>
      <div className="text-left mt-2">
        <p className="text-md text-gray-600">{item.Name}</p>
        <p className="text-md text-gray-600 font-bold">{item.Newprice}</p>
        <p className="text-sm text-gray-400 line-through">{item.Oldprice}</p>
      </div>
    </a>
  );

  return (
    <BaseProductCarousel
      title={
        <span className="text-white font-bold">
          <FontAwesomeIcon icon={faTag} className="mr-2 text-white" />
          Flash Sales
        </span>
      }
      link="/flash/"
      items={carouselItems}
      itemRenderer={itemRenderer}
      redBackground
      textwhite
    />
  );
};

export default Carousel3;
