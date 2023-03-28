import React from "react";

interface IProps {
  children?: React.ReactNode
}

const BaseLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div>
      <header>
        Nav
      </header>

      <div className=" container mx-auto">
        {children}
      </div>

      <footer>
        Footer
      </footer>
    </div>
  )
}

export default BaseLayout