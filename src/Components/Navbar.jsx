import React from "react";
import logo from "../Assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faCircleQuestion, faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
    <div className="flex items-center box-border shadow-md">
      <div className=" mr-32 ml-32">
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
        <button className="border border-gray-300 px-3 py-1 rounded bg-orange-400 text-white font-bold">
          SEARCH
        </button>
        <div className="flex">
          <div className="dropdown">
          <FontAwesomeIcon icon={faUser} 
          className="w-10 h-5"
          />
          <button type="" className="border p-2 ">Account</button>
          </div>
          <div className="dropdown">
          <FontAwesomeIcon icon={faCircleQuestion} 
          className="w-10 h-5"
          />
          <button type="" className="border p-2 ">Help</button>
          </div>
          <div className="dropdown">
          <FontAwesomeIcon icon={faCartShopping} 
          className="w-10 h-5"
          />
          <button type="" className="border p-2 ">Cart</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
