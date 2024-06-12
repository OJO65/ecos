import React from "react";
import star from "../Assets/img/star.png";
import logo from "../Assets/img/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  return (
    <div className="bg-white">
      <img className="h-[60px] ml-auto mr-auto mt-16" src={star} />
      <h1 className="font-bold text-xl p-2 relative block text-center">
        Welcome To Jumia
      </h1>
      <p className=" text-xl font-thin mt-[8px] mr-[400px] mb-[16px] ml-[400px] block text-center">
        Type your e-mail or phone number to log in or create a Jumia account.
      </p>
      <div className="w-[432px] relative mr-auto ml-auto">
        <input
          type="text"
          id="identifierValue"
          name="identifierValue"
          className="w-full p-4 border border-orange-300 rounded-md text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500"
          placeholder=" "
          autoComplete="off"
          required
        />
        <label
          htmlFor="identifierValue"
          className="absolute top-0 left-0 ml-4 mt-1 text-orange-500 text-sm cursor-text transition-all duration-300 pointer-events-none"
        >
          Email or Mobile Number
        </label>
      </div>
      <div className=" w-[432px] relative mr-auto ml-auto mt-10">
        <button className="border p-3 w-[432px] bg-orange-400 rounded-md font-bold text-white text-xl">
          Continue
        </button>
      </div>
      <div className="disclaimer text-sm text-center mt-2">
        <label>By continuing you agree to Jumia’s</label>
        <br />
        <a
          href="/interaction/9Kf_Yfo_v8ZbzqeEKfuRz/en-ke/terms-and-conditions"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Terms and Conditions
        </a>
      </div>
      <div className=" w-[432px] relative mr-auto ml-auto mt-10">
        <button className="border p-3 w-[432px] bg-blue-500 rounded-md font-bold text-xl text-white">
          <FontAwesomeIcon icon={faFacebookSquare} className="mr-4" />
          Log in with facebook
        </button>
      </div>
      <p className="text-sm text-center mt-5 mr-[500px] ml-[500px]">
        For further support, you may visit the Help Center or contact our customer service team.
      </p>
      <img className="h-[60px] mr-auto ml-auto mt-14" src={logo} />
    </div>
  );
};

export default Login;
