import React, { useState } from "react";
import logo from "../Assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faUser,
  faCircleQuestion,
  faCartShopping,
  faAngleDown,
  faBoxesStacked,
  faHeart,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const [showHelpDropdown, setShowHelpDropdown] = useState(false);

  const toggleAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
    setShowHelpDropdown(false);
  };

  const toggleHelpDropdown = () => {
    setShowHelpDropdown(!showHelpDropdown);
    setShowAccountDropdown(false);
  };

  return (
    <>
      <div className="flex items-center box-border shadow-md">
        <div className="mr-32 ml-32">
          <img src={logo} className="w-40" alt="Logo" />
        </div>
        <div className="flex">
          <div className="relative">
            <input
              type="text"
              placeholder="search products, brands and categories"
              className="border border-gray-300 px-3 py-1 rounded w-96 mr-2 pl-8 text-lg"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-2 top-3 text-gray-400"
            />
          </div>
          <button className="border border-gray-300 px-3 py-1 rounded bg-orange-400 text-white">
            SEARCH
          </button>
        </div>
        <div className="relative">
          <div
            className="p-2 m-5  cursor-pointer flex items-center"
            onClick={toggleAccountDropdown}
          >
            <FontAwesomeIcon icon={faUser} className="h-5 mr-2" /> Account{" "}
            <FontAwesomeIcon icon={faAngleDown} className="left-2 top-3 m-2" />
          </div>
          {showAccountDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md flex flex-col items-center">
              <button className="border p-2 rounded-md font-bold bg-orange-400 my-2">
                SIGN IN
              </button>
              <ul className="w-full">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FontAwesomeIcon icon={faUser} /> My Account
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FontAwesomeIcon icon={faBoxesStacked} /> Orders
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  <FontAwesomeIcon icon={faHeart} /> Saved Items
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="relative">
          <div
            className="m-2 p-2 cursor-pointer flex items-center"
            onClick={toggleHelpDropdown}
          >
            <FontAwesomeIcon icon={faCircleQuestion} className="h-5 mr-2" />{" "}
            Help <FontAwesomeIcon icon={faAngleDown} className="left-2 top-3 m-2" />
          </div>
          {showHelpDropdown && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md flex flex-col items-center">
              <ul className="w-full flex flex-col items-center">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-center">
                  Help Center
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-center">
                  Place an Order
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-center">
                  Track Your Order
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-center">
                  Order Cancellation
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-center">
                  Returns & Refunds
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-center">
                  Payment & Jumia Account
                </li>
              </ul>
              <button className="border p-2 rounded-md font-bold bg-orange-400 my-2 flex items-center justify-center">
                <FontAwesomeIcon icon={faComment} className="mr-2" /> LIVE CHAT
              </button>
            </div>
          )}
        </div>
        <div className="m-5 p-2 cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} className="h-5 mr-2" /> Cart
        </div>
      </div>
    </>
  );
};

export default Navbar;
