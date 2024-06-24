import React from "react";
import logo from "../Assets/img/logo2.png";
const Footer = () => {
  return (
    <div className="bg-gray-900 h-[50vh]">
      <div className="flex">
        <div>
          <img src={logo} className="w-[200px] ml-16 p-5" />
        </div>
        <div>
          <h1 className="font-bold text-white text-lg">New to Jumia?</h1>
          <p className="font-semibold text-white text-sm">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
