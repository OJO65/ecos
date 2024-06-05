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
  const [hoveredSubMenu, setHoveredSubMenu] = useState(null);

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
      submenu: ["PHONE ACCESSORIES", "HOME", "FASHION"]
    },
    { 
      icon: faMobilePhone, 
      label: "Phones & Tablets",
      submenu: ["MOBILE PHONES", "TABLETS", "ACCESSORIES"]
    },
    { 
      icon: faTelevision, 
      label: "Tvs & Audio",
      submenu: ["TELEVISIONS", "HOME AUDIO", "ACCESSORIES & SUPPLIES"]
    },
    { 
      icon: faBlenderPhone, 
      label: "Appliances",
      submenu: ["LARGE APPLIANCES", "SMALL APPLIANCES"]
    },
    { 
      icon: faMedkit, 
      label: "Health & Beauty",
      submenu: ["FACIAL SKIN CARE", "MAKEUP"]
    },
    { 
      icon: faHome, 
      label: "Home & Office",
      submenu: ["HOME KITCHEN", "OFFICE PRODUCTS"]
    },
    { 
      icon: faShirt, 
      label: "Fashion",
      submenu: ["MEN'S FASHION", "WOMEN'S FASHION", "KID'S FASHION"]
    },
    { 
      icon: faComputer, 
      label: "Computing",
      submenu: ["LAPTOPS", "COMPUTER & ACCESSORIES"]
    },
    { 
      icon: faAppleWhole, 
      label: "Supermarket",
      submenu: ["FOOD CUPBOARD", "DRINKS", "DRINK BRANDS"]
    },
    { 
      icon: faBaby, 
      label: "Baby Products",
      submenu: ["FEEDING", "DIAPERS", "BABY SAFETY"]
    },
    { 
      icon: faBasketball, 
      label: "Sporting Goods",
      submenu: ["SPORTS & FITNESS", "SPORTS NUTRITION"]
    },
    { 
      icon: faListDots, 
      label: "Other categories",
      submenu: ["AUTOMOBILE", "GAMING"]
    },
  ];

  return (
    <div className="md:flex hidden m-2 bg-orange-600 rounded-md relative">
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
              {hoveredSubMenu === index && (
                <div className="absolute top-0 left-full ml-2 w-auto text-xs bg-white shadow-lg rounded-md flex z-20">
                  <ul className="flex">
                    {category.submenu.map((item, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onMouseEnter={() => {
                          if (item === "PHONE ACCESSORIES") {
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
                       <hr className="my-1 border-gray-200"/>
                      </li>
                    ))}
                    
                  </ul>
                  {showPhoneAccessories && (
                    <div className="absolute top-full mt-2 w-full bg-gray-100 p-4 z-10">
                      <p>Content about phone accessories goes here...</p>
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
          <img src={gif9} alt="Uploaded GIF" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
