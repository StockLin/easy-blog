import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../../features/posts/PostCard";
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
    <div className="flex flex-col gap-4 py-4">
      <h2 className="mb-4 text-xl font-bold ">{title}</h2>
      {children}

      {
        showMore && (
          <Link to={showMore.url}>
            <div className="font-normal text-green-500 text-md">{showMore.name}</div>
          </Link>
        )
      }
    </div>
  )
}

export default DescriptionBox