import {
  faAppleWhole,
  faBaby,
  faBasketball,
  faBlenderPhone,
  faComputer,
  faHome,
  faListDots,
  faMedkit,
  faMobilePhone,
  faShirt,
  faShoppingBag,
  faTelevision,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "../Assets/img/KE_FS_NewArrivals_0524_S.gif";
import gif1 from "../Assets/img/KE_FS_NewArrivals_0524_S.gif";
import gif2 from "../Assets/img/KE_Generic_JA24_Teasing_0524_S.gif";
import gif3 from "../Assets/img/KE_JA24_Live_ACD_Phones_0524_S.gif";
import gif4 from "../Assets/img/KE_JA24_Tease_ACD_0524_S1.gif";
import gif5 from "../Assets/img/KE_FS_NewArrivals_0524_S.gif";
import gif6 from "../Assets/img/KE_JA24_Tease_ACD_0524_S3.gif";
import gif7 from "../Assets/img/KE_JA24_Vote_0524_S.gif";
import gif8 from "../Assets/img/_S_ecobank.jpg";

const Banner = () => {
  const gifs = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8];
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [gifs.length]);

  const handleDotClick = (index) => {
    setCurrentGifIndex(index);
  };

  return (
    <div className="flex m-2">
      <div className="border w-1/6 m-2 p-2 text-sm rounded-md bg-white h-[384px]">
        <ul className="p-2 h-full overflow-auto">
          <li className="py-2">
            <FontAwesomeIcon icon={faShoppingBag} className="mr-2" /> Official
            Stores
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faMobilePhone} className="mr-2" /> Phones &
            Tablets
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faTelevision} className="mr-2" /> Tvs & Audio
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faBlenderPhone} className="mr-2" />{" "}
            Appliances
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faMedkit} className="mr-2" /> Health & Beauty
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home & Office
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faShirt} className="mr-2" /> Fashion
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faComputer} className="mr-2" /> Computing
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faAppleWhole} className="mr-2" /> Supermarket
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faBaby} className="mr-2" /> Baby Products
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faBasketball} className="mr-2" /> Sporting
            Goods
          </li>
          <li className="py-2">
            <FontAwesomeIcon icon={faListDots} className="mr-2" /> Other
            categories
          </li>
        </ul>
      </div>

      <div className="m-2 border rounded-md flex-grow-0 flex-shrink-0 w-[712px] h-[384px] relative overflow-hidden flex items-center justify-center">
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
                index === currentGifIndex ? "bg-orange-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;