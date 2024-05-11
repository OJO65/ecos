import React from 'react';
import logo from "../Assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="mr-4">
        <img src={logo} className='w-40' alt="Logo" />
      </div>
      <div>
        <input type="text" placeholder="Search..." className="border border-gray-300 px-3 py-1 rounded-lg" />
      </div>
    </div>
  );
}

export default Navbar;
