import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../../features/posts/PostICard";
import { IPost } from "../../features/posts/types";

interface IProps {
  title: string,
  children?: React.ReactNode,
  showMore?: {
    name: string,
    url: string
  }
}

const DescriptionBox: React.FC<IProps> = ({ title, children, showMore }) => {
  return (
    <div className=" flex flex-col p-8 gap-4">
      <h2 className=" text-xl font-bold mb-4">{title}</h2>
      {children}

      {
        showMore && (
          <Link to={showMore.url}>
            <div className=" text-green-500 text-md font-normal">{showMore.name}</div>
          </Link>
        )
      }
    </div>
  )
}

export default DescriptionBox