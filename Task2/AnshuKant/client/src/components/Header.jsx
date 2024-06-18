import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-200 flex justify-between items-center px-4 md:px-5 w-full h-16">
      <div className="font-bold text-2xl text-red-500">
          <Link to={"/"}>Anshu</Link>
      </div>
      <ul className="hidden md:flex gap-5 font-semibold">
        <Link to={'/'} className="cursor-pointer">Home</Link>
        <Link to={'/'} className="cursor-pointer">About</Link>
        <Link to={'/'} className="cursor-pointer">Contact</Link>
      </ul>
      <Link to={"/login"} className=" bg-red-600 text-white rounded p-2 font-bold cursor-pointer">
        Login
      </Link>
      
    </div>
  );
};

export default Header;
