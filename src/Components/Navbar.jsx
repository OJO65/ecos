import React, { useState, useEffect, useRef } from "react";
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
  const accountDropdownRef = useRef(null);
  const helpDropdownRef = useRef(null);

  const toggleAccountDropdown = () => {
    setShowAccountDropdown(!showAccountDropdown);
    setShowHelpDropdown(false);
  };

  const toggleHelpDropdown = () => {
    setShowHelpDropdown(!showHelpDropdown);
    setShowAccountDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (accountDropdownRef.current && !accountDropdownRef.current.contains(event.target)) {
      setShowAccountDropdown(false);
    }

    if (helpDropdownRef.current && !helpDropdownRef.current.contains(event.target)) {
      setShowHelpDropdown(false);
    }
  };

  useEffect(() => {
    if (showAccountDropdown || showHelpDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAccountDropdown, showHelpDropdown]);
  const handleSignInClick = () => {
    window.location.href = "/Login";
  };
  

  return (
    <div className="bg-white md:flex items-center box-border shadow-md max-w-full">
      <div className="ml-2 mr-32 md:ml-16">
        <img src={logo} className="w-40" alt="Logo" />
      </div>
      <div className="md:flex hidden">
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
      <div className="relative md:block hidden">
        <div
          className="p-2 m-5  cursor-pointer flex items-center"
          onClick={toggleAccountDropdown}
        >
          <FontAwesomeIcon icon={faUser} className="h-5 mr-2" /> Account{" "}
          <FontAwesomeIcon icon={faAngleDown} className="left-2 top-3 m-2" />
        </div>
        {showAccountDropdown && (
          <div ref={accountDropdownRef} className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md flex flex-col items-center z-10">
            <button className="border p-2 rounded-md font-bold bg-orange-400 my-2" onClick={handleSignInClick}>
              SIGN IN
            </button>
            <hr className="my-1 border-gray-500" />
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
      <div className="relative md:block hidden">
        <div
          className="m-2 p-2 cursor-pointer flex items-center"
          onClick={toggleHelpDropdown}
        >
          <FontAwesomeIcon icon={faCircleQuestion} className="h-5 mr-2" />{" "}
          Help <FontAwesomeIcon icon={faAngleDown} className="left-2 top-3 m-2" />
        </div>
        {showHelpDropdown && (
          <div ref={helpDropdownRef} className="z-10 absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md flex flex-col items-center">
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
            <hr className="my-1 border-gray-500" />
            <button className="border p-2 rounded-md font-bold bg-orange-400 my-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faComment} className="mr-2" /> LIVE CHAT
            </button>
          </div>
        )}
      </div>
      <div className="m-5 p-2 cursor-pointer md:block hidden">
        <FontAwesomeIcon icon={faCartShopping} className="h-5 mr-2" /> Cart
      </div>
    </div>
  );
};

export default Navbar;
