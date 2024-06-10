import {
  faAppleWhole,
  faBaby,
  faBasketball,
  faBlenderPhone,
  faCircleQuestion,
  faComputer,
  faHome,
  faListDots,
  faMedkit,
  faMobilePhone,
  faMoneyBill,
  faRotateLeft,
  faShirt,
  faShoppingBag,
  faTelevision,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import gif1 from "../Assets/img/KE_FS_NewArrivals_0524_S.gif";
import gif2 from "../Assets/img/KE_Generic_JA24_Teasing_0524_S.gif";
import gif3 from "../Assets/img/KE_JA24_Live_ACD_Phones_0524_S.gif";
import gif4 from "../Assets/img/KE_JA24_Tease_ACD_0524_S1.gif";
import gif5 from "../Assets/img/KE_FS_NewArrivals_0524_S.gif";
import gif6 from "../Assets/img/KE_JA24_Tease_ACD_0524_S3.gif";
import gif7 from "../Assets/img/KE_JA24_Vote_0524_S.gif";
import gif8 from "../Assets/img/_S_ecobank.jpg";
import gif9 from "../Assets/img/KE_Generic_JA24_Live_BF.gif";

const Banner = () => {
  const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9];
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const [showPhoneAccessories, setShowPhoneAccessories] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);
  const [isHoveringList, setIsHoveringList] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [gifs.length]);

  const handleDotClick = (index) => {
    setCurrentGifIndex(index);
  };

  const categories = [
    {
      icon: faShoppingBag,
      label: "Official Stores",
      submenu: [
        {label: "PHONE ACESSORIES", id: "phone-accessories"},
        {label: "HOME", id: "home"},
        {label: "FASHION", id: "fashion"},
      ],
    },
    {
      icon: faMobilePhone,
      label: "Phones & Tablets",
      submenu: [
        {label: "MOBILE PHONES", id: "mobile phones"},
        {label: "TABLETS", id: "tablets"},
        {label: "ACCESSORIES & SUPPLIES", id: "accessories-supplies"},
      ],
    },
    {
      icon: faTelevision,
      label: "Tvs & Audio",
      submenu: [
        {label: "TELEVISIONS", id: "televisions"},
        {label: "HOME AUDIO", id: "home-audio"},
        {label: "ACCESSORIES & SUPPLIES", id: "accessories-supplies"},
      ],
    },
    {
      icon: faBlenderPhone,
      label: "Appliances",
      submenu: [
        {label: "LARGE APPLIANCES", id: "large-appliances"},
        {label: "SMALL APPLIANCES", id: "small-appliances"},
        {label: "COOKING APPLIANCES", id: "cooking-appliances"},
        ],
    },
    {
      icon: faMedkit,
      label: "Health & Beauty",
      submenu: [
        {label: "FACIAL SKIN CARE", id: "facial-skin-care"},
        {label: "MAKE UP", id: "makeup"},
        {label: "HEALTH & WELLNESS", id: "health-wellness"}
      ],
    },
    {
      icon: faHome,
      label: "Home & Office",
      submenu: [
        {label: "HOME KITCHEN", id: "home-kitchen"},
        {label: "OFFICE PRODUCTS", id: "office-products"},
        {label: "HOME BRANDS", id: "home-brands"},
      ],
    },
    {
      icon: faShirt,
      label: "Fashion",
      submenu: [
        {label: "MEN'S FASHION", id: "mens-fashion"},
        {label: "WOMEN'S FASHION", id: "womens-fashion"},
        {label: "KID'S FASHION", id: "kids-fashion"},
      ],
    },
    {
      icon: faComputer,
      label: "Computing",
      submenu: [
        {label: "LAPTOPS", id: "laptops"},
        {label: "COMPUTER COMPONENTS", id: "computer-components"},
        {label: "COMPUTER & ACCESSORIES", id: "computer-acessories"},
      ],
    },
    {
      icon: faAppleWhole,
      label: "Supermarket",
      submenu: [
        {label: "FOOD CUPBOARD", id: "food-cupboard"},
        {label: "DRINKS", id: "drinks"},
        {label: "DRINKS BRANDS", id: "drinks-brands"},
        {label: "HOUSEHOLD SUPPLIES", id: "household-supplies"}
      ],
    },
    {
      icon: faBaby,
      label: "Baby Products",
      submenu: [
        {label: "FEEDING", id: "feeding"},
        {label: "DIAPERING", id: "diapering"},
        {label: "BABY SAFETY", id: "baby-safety"},
        {label: "BABY & TODLER TOYS", id: "baby-toys"}
      ],
    },
    {
      icon: faBasketball,
      label: "Sporting Goods",
      submenu: [
        {label: "SPORTS & FITNESS", id: "sports-fitness"},
        {label: "SPORTS NUTRITION", id: "sports-nutrition"},
        {label: "SPORTS BRANDS", id: "sports-brands"},
        {label: "OUTDOOR RECREATION", id: "outdoor-recreation"}
      ],
    },
    {
      icon: faListDots,
      label: "Other categories",
      submenu: [
        {label: "AUTOMOBILE", id: "automobile"},
        {label: "GAMING", id: "gaming"},
        {label: "GARDEN & OUTDOORS", id: "garden-outdoors"},
        {label: "BOOKS, MOVIES & MUSIC", id: "movies-music"}
      ],
    },
  ];

  return (
    <div
      className="md:flex hidden m-2 bg-orange-600 rounded-md relative"
      onMouseEnter={() => setIsHoveringList(true)}
      onMouseLeave={() => setIsHoveringList(false)}
    >
      <div className="border md:w-1/6 w-96 m-5 p-2 text-sm rounded-md bg-white h-[384px] relative">
        <ul className="p-1 h-full">
          {categories.map((category, index) => (
            <li
              key={index}
              className="banner-item p-1 hover:text-orange-500 cursor-pointer flex justify-between items-center relative"
              onMouseEnter={() => setHoveredSubMenu(index)}
              onMouseLeave={() => setHoveredSubMenu(null)}
            >
              <div>
                <FontAwesomeIcon icon={category.icon} className="mr-2" />{" "}
                {category.label}
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              {hoveredSubMenu === index &&
                (isHoveringList || showPhoneAccessories || showHome) && (
                  <div className="absolute top-0 left-full ml-2 w-auto text-xs bg-white shadow-lg rounded-md flex z-20">
                    <ul className="flex text-black">
                      {category.submenu.map((item, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          onMouseEnter={() => {
                            if (item === "PHONE ACCESSORIES, HOME") {
                              setShowPhoneAccessories(true);
                            }
                          }}
                          onMouseLeave={() => {
                            if (item === "PHONE ACCESSORIES") {
                              setShowPhoneAccessories(false);
                            }
                          }}
                        >
                          <div className="whitespace-nowrap"> {item}</div>
                          <hr className="my-1 border-gray-200" />
                        </li>
                      ))}
                    </ul>
                    {showPhoneAccessories && (
                      <div className="absolute text-black top-full mt-2 w-full bg-gray-100 p-4 z-10">
                        <ul>
                          <li>Samsung</li>
                          <li>Tecno</li>
                          <li>Infinix</li>
                          <li>FreeYond</li>
                          <li>Oraimo</li>
                        </ul>
                      </div>
                    )}
                       {showHome && (
                      <div className="absolute text-black top-full mt-2 w-full bg-gray-100 p-4 z-10">
                        <ul>
                          <li>Solarmax</li>
                          <li>Nunix</li>
                          <li>Annov</li>
                          <li>Redberyy</li>
                          <li>Miniso</li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
            </li>
          ))}
        </ul>
      </div>

      <div className="md:m-5 border border-orange-700 rounded-md flex-grow-0 flex-shrink-0 md:w-[712px] w-[400px] h-[384px] relative overflow-hidden flex items-center justify-center">
        <img
          src={gifs[currentGifIndex]}
          alt={`GIF ${currentGifIndex + 1}`}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {gifs.map((gif, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 rounded-full mx-1 cursor-pointer ${
                index === currentGifIndex ? "bg-orange-200" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col m-3">
        <div className="bg-white rounded-md m-2 p-2 w-[218px] h-[184px] flex flex-col justify-between">
          <ul>
            <li className="p-1 font-bold">
              <FontAwesomeIcon
                icon={faCircleQuestion}
                className="fa-fw fa-2x translate-y-4"
              />{" "}
              HELP CENTER
              <span className="block text-xs pl-11 font-normal">
                Guide to customer care
              </span>
            </li>
            <li className="p-1 font-bold">
              <FontAwesomeIcon
                icon={faRotateLeft}
                className="fa-fw fa-2x translate-y-4"
              />{" "}
              EASY RETURN
              <span className="block text-xs pl-11 font-normal">
                Quick Refund
              </span>
            </li>
            <li className="p-1 font-bold">
              <FontAwesomeIcon
                icon={faMoneyBill}
                className="fa-fw fa-2x translate-y-4"
              />{" "}
              SELL ON JUMIA
              <span className="block text-xs pl-11 font-normal">
                Millions of customers
              </span>
            </li>
          </ul>
        </div>
        <div className="rounded-md w-[218px] h-[184px] m-2">
          <img
            src={gif9}
            alt="Uploaded GIF"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
