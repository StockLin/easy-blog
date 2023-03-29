import React from "react";


interface IProps {
  children?: React.ReactNode,
  onClick?: () => void,
  size?: "sm" | "md" | "lg"
}

const Button: React.FC<IProps> = ({ children, onClick, size }) => {
  return (
    <div
      className=" py-[8px] px-[16px] border bg-gray-200 hover:bg-gray-300 duration-300 rounded-full text-center text-gray-800 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button