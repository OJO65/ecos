import React from "react";
import logo from "../Assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
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
      </div>
    </div>
  );
};

export default Navbar;
