import React from "react";
import Navbar from "./Navbar";

interface IProps {
  children?: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="relative w-full ">
      <header>
        <Navbar />
      </header>

      <div className=" container mx-auto mt-[32px] py-[16px]">
        {children}
      </div>

      <footer>
        Footer
      </footer>
    </div>
  )
}

export default BaseLayout