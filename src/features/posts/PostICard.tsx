import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUserQuery } from '../users/usersSlice';
import { IPost } from './types';
import { FaRegBookmark } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import UserBriefHeader from '../users/UserBriefHeader';

interface IProps {
  post: IPost,
  bookMark?: boolean,
  hiddenLine?: boolean
  size?: "sm" | "default",
  showContent?: boolean,
  showThumbnail?: boolean,
  showFooter?: boolean
}

const PostCard: React.FC<IProps> = ({ post, bookMark = false, hiddenLine = false, size = "default", showContent = true, showThumbnail = true, showFooter = true }) => {
  const { id, userId, title, content, thumbnail } = post;
  const { data: user } = useGetUserQuery(userId);

  const renderCardFooter = (
    <div className="flex flex-row justify-between w-full py-8 item-center">
      <div className="flex flex-row items-center gap-2 text-xs flex-nowrap">
        <button className="px-2 py-1 duration-300 bg-gray-200 rounded-full hover:bg-gray-300">JavaScript</button>
        <p>5 min read</p>
      </div>

      <div className="flex flex-row gap-2 ">
        <FaRegBookmark className="text-xl text-gray-500 duration-300 cursor-pointer hover:text-gray-600" />
        <MdMoreHoriz className="text-xl text-gray-500 duration-300 cursor-pointer hover:text-gray-600" />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-start justify-center flex-1 w-full ">

      {!hiddenLine && (<hr className=" w-full h-[1px] bg-[#e6e6e6] border-0 mb-[16px]" />)}

      {/* author description */}
      <UserBriefHeader user={user} />

      {/* content */}
      <Link className="w-full " to={`/posts/${id}`}>
        <div className=" mt-[12px] flex flex-row justify-between item-start">
          {/* left side */}
          <div className={`${thumbnail ? "basis-3/4" : ""}`}>
            <div className="flex flex-col gap-4 ">
              <h2 className={`${size === "sm" ? "text-md" : "text-[22px]"} ${size === "sm" ? "lg:text-[16px]" : "lg:text-2xl"} font-bold line-clamp-3 cursor-pointer overflow-hidden`}>{title}</h2>
              {
                showContent && (
                  <div className="hidden md:block">
                    <p className="overflow-hidden text-gray-500 line-clamp-2">{content}</p>
                  </div>
                )
              }
            </div>

            {
              showFooter && (
                <div className="hidden lg:block">
                  {renderCardFooter}
                </div>
              )
            }
          </div>


          {/* right side */}
          {
            thumbnail && (
              <div className=" flex-auto ml-[64px]">
                <img
                  className=" w-[80px] h-[56px] md:w-[112px] md:h-[112px] object-cover"
                  src={thumbnail}
                  alt="thumbnail"
                />
              </div>
            )
          }
        </div>
      </Link>

      {
        showFooter && (
          <div className="block w-full lg:hidden">
            {renderCardFooter}
          </div>
        )
      }
    </div>
  )
}

export default PostCard