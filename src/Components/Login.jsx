import React from "react";
import star from "../Assets/img/star.png";
const Login = () => {
  return (
    <div className="bg-white">
      <img className="h-[60px] ml-auto mr-auto mt-16" src={star} />
      <h1 className="font-bold text-xl p-2 relative block text-center">
        Welcome To Jumia
      </h1>
      <p className=" text-xl font-thin mt-[8px] mr-[400px] mb-[16px] ml-[400px] block text-center">Type your e-mail or phone number to log in or create a Jumia account.</p>
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
    </div>
  );
};

export default Login;
