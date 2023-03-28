import React from 'react';
import { Link } from 'react-router-dom';
import { useGetUserQuery } from '../users/usersSlice';
import { IPost } from './types';
import { FaRegBookmark } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";

interface IProps {
  post: IPost,
  bookMark?: boolean,
  hiddenLine?: boolean
}

const PostCard: React.FC<IProps> = ({ post, bookMark = false, hiddenLine = false }) => {
  const { id, userId, title, content } = post;
  const { data: user } = useGetUserQuery(userId);

  const renderAuthorDescriptions = (
    <Link to={`/author/${user?.id}`}>
      <div className=" flex flex-row">
        <div className=" w-[24px] h-[24px] rounded-full overflow-hidden">
          <img className=" w-full h-full object-cover" src="https://miro.medium.com/v2/resize:fill:48:48/1*JE2i36RVA_8ejCr2F5ZtNA.jpeg" alt="javascript" />
        </div>
        <div className=" ml-[8px] flex flex-row items-center flex-nowrap font-normal text-xs gap-1">
          <span>StarkLin</span>
          <span>·</span>
          <span>Mar 26</span>
        </div>
      </div>
    </Link>
  );

  const renderCardFooter = (
    <div className=" w-full flex flex-row justify-between item-center py-8">
      <div className=" text-xs flex flex-row items-center flex-nowrap gap-2">
        <button className=" py-1 px-2 rounded-full bg-gray-200 hover:bg-gray-300 duration-300">JavaScript</button>
        <p>5 min read</p>
      </div>

      <div className=" flex flex-row gap-2 ">
        <FaRegBookmark className=" text-xl text-gray-500 hover:text-gray-600 duration-300 cursor-pointer" />
        <MdMoreHoriz className=" text-xl text-gray-500 hover:text-gray-600 duration-300 cursor-pointer" />
      </div>
    </div>
  );

  return (
    <div className=" flex-1 flex flex-col justify-center items-start">
      <hr className=" w-full h-[1px] bg-[#e6e6e6] border-0 mb-[16px]" />

      {/* author description */}
      {renderAuthorDescriptions}

      {/* content */}
      <Link to={`/post/${id}`}>
        <div className=" mt-[12px] flex flex-row item-start">
          {/* left side */}
          <div className=" basis-3/4">
            <div className=" flex flex-col gap-4">
              <h2 className=" text-xl lg:text-2xl font-bold line-clamp-3 cursor-pointer overflow-hidden">{title}</h2>
              <div className="hidden lg:block">
                <p className=" line-clamp-2 text-gray-500 overflow-hidden">{content}</p>
              </div>
            </div>

            <div className=" hidden lg:block">
              {renderCardFooter}
            </div>
          </div>


          {/* right side */}
          <div className=" flex-auto ml-[64px]">
            <img className=" w-[80px] h-[56px] lg:w-[112px] lg:h-[112px] object-cover" src="https://miro.medium.com/v2/resize:fill:112:112/1*tKewEUEuB3w0IXJwGYN0LQ.png" alt="thumbnail" />
          </div>
        </div>
      </Link>

      <div className=" w-full block lg:hidden">
        {renderCardFooter}
      </div>
    </div>
  )
}

export default PostCard