import React from "react";


interface IProps {
  children?: React.ReactNode,
  onClick?: () => void,
  size?: "sm" | "md" | "lg",
  styles?: string
}

const Button: React.FC<IProps> = ({ children, onClick, size, styles }) => {
  return (
    <div
      className={`py-[8px] px-[16px] flex justify-center items-center border bg-gray-200 hover:bg-gray-300 duration-300 rounded-full text-center align-middle text-gray-800 cursor-pointer ${styles}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

export default Button