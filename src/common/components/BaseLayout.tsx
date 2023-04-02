import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

interface IProps {
  children?: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="relative w-full ">
      <header>
        <Navbar />
      </header>

      <div className=" container mx-auto mt-[64px] py-[16px]">
        <Outlet />
        {children}
      </div>

      <footer>
        Footer
      </footer>
    </div>
  )
}

export default BaseLayout