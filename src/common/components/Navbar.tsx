import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className=" fixed w-full z-10 flex justify-between items-center h-[32px] py-[32px] shadow-sm border-b-[0.1px] border-black/30 bg-white top-0">
      <div className="container flex items-center justify-between w-full p-4 mx-auto ">
        <Link to="/">
          <div className=" w-[124px] h-[72px]">
            <img
              className="object-contain w-full h-full "
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/798px-Medium_%28website%29_logo.svg.png"
              alt="LOGO"
            />
          </div>
        </Link>

        <div className="flex-row items-center hidden lg:flex">
          <ul className="flex flex-row gap-4 list-none ">
            <li className="p-4 text-gray-500 duration-300 cursor-pointer text-md hover:text-gray-700">Home</li>
            <li className="p-4 text-gray-500 duration-300 cursor-pointer text-md hover:text-gray-700">About Me</li>
            <li className="p-4 text-gray-500 duration-300 cursor-pointer text-md hover:text-gray-700">Contact Me</li>
          </ul>

          <div>
            Theme Mode
          </div>

          <div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar