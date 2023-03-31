import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IUser } from "./types";

interface IProps {
  user?: IUser
}

const UserCard: React.FC<IProps> = ({ user }) => {
  // const { id } = user;
  const id = "text-id";

  const renderIcons = (icons: React.ReactNode[]) => {
    return icons.map((icon, idx) => (
      <div key={idx} className=" p-2 border-[2px] border-gray-300 rounded-full hover:bg-gray-300 hover:text-gray-500 duration-300 cursor-pointer">
        {icon}
      </div>
    ));
  }

  return (
    <div className=" flex flex-col justify-center items-center p-[16px] gap-8">
      <Link to={`/users/${id}`}>
        <img
          className=" w-[240px] h-[240px] rounded-full object-cover shadow-xl"
          src="https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg"
          alt="about-me"
        />
      </Link>

      {/* intro */}
      <div className="flex flex-col items-center justify-center gap-4 ">
        <Link to={`/users/${id}`}>
          <h2 className="text-3xl font-extrabold duration-300  hover:text-black/60">Stark Lin</h2>
        </Link>
        <p className="leading-6 text-justify text-gray-500  text-md line-clamp-3 lg:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia harum blanditiis natus molestias id, nemo adipisci libero, tempore, atque nihil corrupti suscipit minima fuga et vitae aut repellendus exercitationem quaerat.
        </p>
      </div>

      {/* links */}
      <div className="flex flex-row items-center justify-center gap-4 ">
        {
          renderIcons([
            <AiFillGithub />,
            <AiFillLinkedin />,
            <AiFillTwitterCircle />,
            <AiFillInstagram />
          ])
        }
      </div>
    </div>
  )
}

export default UserCard