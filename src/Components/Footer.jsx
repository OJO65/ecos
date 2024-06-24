import React from "react";
import logo from "../Assets/img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
          <input
            type="email"
            placeholder="Enter E-mail Address"
            className="border w-[230px] h-[50px] rounded-md bg-white p-7"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="relative text-gray-400 h-[20px] w-[20px] right-56"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
