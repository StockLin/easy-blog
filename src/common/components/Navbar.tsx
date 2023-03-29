import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className=" fixed w-full z-10 flex justify-between items-center h-[32px] py-[32px] shadow-sm border-b-[0.1px] border-black/30 bg-white top-0">
      <div className=" w-full container mx-auto flex justify-between items-center p-4">
        <div className=" w-[124px] h-[72px]">
          <img
            className=" w-full h-full object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Medium_%28website%29_logo.svg/798px-Medium_%28website%29_logo.svg.png"
            alt="LOGO"
          />
        </div>

        <div className=" hidden lg:flex flex-row items-center">
          <ul className=" list-none flex flex-row gap-4">
            <li className=" p-4 text-md text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">Home</li>
            <li className=" p-4 text-md text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">About Me</li>
            <li className=" p-4 text-md text-gray-500 hover:text-gray-700 duration-300 cursor-pointer">Contact Me</li>
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