import React from "react";
import logo from "../Assets/img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import star from "../Assets/img/star.png";
const Footer = () => {
  return (
    <>
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
            className="relative text-gray-400 h-[20px] w-[20px] right-56 translate-y-1"
          />
        </div>
        <div className="mt-7 -ml-40">
          <button className="border p-2 bg-gray-900 h-[50px] w-[100px] m-2 mt-6 rounded-md font-bold text-white">
            MALE
          </button>
          <button className="border p-2 bg-gray-900 h-[50px] w-[100px] m-2 mt-6 rounded-md font-bold text-white">
            FEMALE
          </button>
        </div>
      </div>
      <div className="flex text-white ml-[260px] mr-[100px] text-sm">
          <input type="checkbox" className="m-1" />
          <p className="w-[480px] m-2">
            I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe
            from newsletters at any time.
          </p>
        </div>
        <a href="" className="ml-[285px] text-orange-600 text-sm">I accept the legal terms</a>
        <div className="flex-row">
        <div className="m-2">
      <img src={star} className="h-[60px] m-2" />
      </div>
      <h1 className="text-white font-bold">DOWNLOAD JUMIA FREE APP</h1>
      <p className="text-white text-sm">Get access to exclusive offers!</p>
      </div>
    </div>

    
    </>
    
  );
};

export default Footer;
