import React from "react";
import logo from "../Assets/img/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import google from "../Assets/img/google-play.svg";
import apple from "../Assets/img/apple.svg";
import star from "../Assets/img/star.png";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import footerData from "../Components/footerData.json";

const Footer = () => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "faFacebook":
        return faFacebook;
      case "faInstagram":
        return faInstagram;
      case "faYoutube":
        return faYoutube;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-gray-900 h-[50vh] max-w-full">
        <div className="flex mr-[100px] ml-[160px]">
          <div>
            <img
              src={logo}
              className="w-[200px] -translate-x-24 -translate-y-2 p-5 mt-10"
            />
          </div>
          <div className="w-[500px] m-5 p-2 h-[120px]">
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
            <div className="w-[240px] ml-[250px] -translate-y-16 -translate-x-5">
              <button className="border hover:text-orange-500 hover:border-orange-500 p-2 bg-gray-900 h-[50px] w-[100px] m-2 rounded-md font-bold text-white">
                MALE
              </button>
              <button className="border hover:text-orange-500 hover:border-orange-500 p-2 bg-gray-900 h-[50px] w-[100px] m-2 rounded-md font-bold text-white">
                FEMALE
              </button>
            </div>
          </div>
        </div>
        <div className="flex text-white ml-[380px] mr-[100px] text-sm -mt-5">
          <input type="checkbox" className="m-1" />
          <p className="w-[480px] m-2">
            I agree to Jumia’s Privacy and Cookie Policy. You can unsubscribe
            from newsletters at any time.
          </p>
        </div>
        <a href="" className="ml-[410px] text-orange-600 text-sm">
          I accept the Legal Terms
        </a>
        <div className="flex-row translate-x-[950px] -translate-y-48">
          <div className="m-2">
            <img src={star} className="h-[50px] ml-3" />
          </div>
          <h1 className="text-white font-bold translate-x-20 -translate-y-16">
            DOWNLOAD JUMIA FREE APP
          </h1>
          <p className="text-white text-sm translate-x-20 -translate-y-16">
            Get access to exclusive offers!
          </p>
          <div className="flex flex-row w-52 -mt-16 ml-20">
            <div className="m-1">
              <p className="text-white text-xs">Download on the</p>
              <img src={apple} className="h-[20px] -ml-5 -mt-5 translate-y-5" />
              <a href="" className="text-white font-semibold">
                App Store
              </a>
            </div>
            <div className="translate-x-8 p-1">
              <p className="text-white text-xs">Download on the</p>
              <img
                src={google}
                className="h-[20px] -ml-6 -mt-5 translate-y-5"
              />
              <a href="" className="text-white font-semibold">
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 h-[65vh] -translate-y-20">
        <div className="grid grid-cols-7 translate-y-3">
          {footerData.sections.map((section, index) => (
            <div key={index} className="p-2">
              <p className="text-white font-bold text-sm ml-5 p-1 max-w-full">
                {section.title}
              </p>
              <ul className="text-white text-xs ml-7">
                {section.links.map((link, idx) => (
                  <li key={idx}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <br />
        <p className="text-white text-sm font-semibold ml-7">JOIN US</p>
        <div className="flex ml-6">
          {footerData.socialMedia.map((social, idx) => (
            <a href={social.link} key={idx} className="m-1">
              <FontAwesomeIcon icon={getIcon(social.icon)} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
