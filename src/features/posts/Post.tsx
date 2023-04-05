import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../common/components/Button";
import UserCard from "../users/UserCard";
import { useGetUserQuery } from "../users/usersSlice";
import PostSkeleton from "./PostSkeleton";
import { useGetPostQuery } from "./postsSlice";

import { GrMail } from "react-icons/gr";
import DescriptionBox from "../../common/components/DescriptionBox";
import PostCard from "./PostCard";
import { IPost } from "./types";

import { MdMoreHoriz } from "react-icons/md";
import { FaTwitter, FaFacebook, FaLinkedin, FaLink, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { BsHandThumbsUp } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: post } = useGetPostQuery(id);
  const { data: user } = useGetUserQuery(post?.userId);
  const [tags, setTags] = useState<string[]>([
    "React",
    "Typescript",
    "Fonts",
    "Web Development",
    "Nextjs"
  ]);

  const [morePostsLoading, setMorePostLoading] = useState<boolean>(false);

  const morePosts: IPost[] = [
    { id: 1, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto", thumbnail: "https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg" },
    { id: 2, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto", thumbnail: "https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg" },
    { id: 3, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto", thumbnail: "https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg" }
  ];


  const renderMostPopularPosts = () => {
    return (
      <DescriptionBox
        title="More from Medium"
        showMore={{ name: "See more", url: "/" }}
      >
        {
          morePostsLoading ? (
            <PostSkeleton counts={2} />
          ) : (
            morePosts?.map((post, idx) => (
              <PostCard
                key={idx}
                post={post}
                hiddenLine={true}
                size={"sm"}
                showFooter={false}
                showContent={false}
                showThumbnail={true}
              />
            ))
          )
        }
      </DescriptionBox>
    );
  }


  return isLoading ? (
    <PostSkeleton />
  ) : (
    <div className="grid grid-cols-3 grap-8">
      {/* post */}
      <div className="col-span-3 lg:col-span-2  border-r-[0.1px] border-black/10">
        <div className="w-full p-[32px]">
          {/* author description */}
          <div className="flex flex-col justify-center w-full gap-[24px] lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-row ">
              <img className=" w-[48px] h-[48px] rounded-full object-cover" src="https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg" alt="avatar" />
              <div className="flex flex-col ml-[16px]">
                <h3 className="text-[16px]">StarkLin</h3>
                <span className="text-gray-500 text-[14px] font-light">Nov 4, 2022 · 9 min read</span>
              </div>
            </div>

            <div className="flex flex-row items-center gap-4 ">
              <div className="mr-4 lg:hidden">
                <Button styles="bg-white text-gray-400"><FaRegBookmark /> &nbsp; Save</Button>
              </div>

              <a href="/twitter" target="_blank" className=" text-[16px] text-gray-400 duration-300 hover:text-black">
                <FaTwitter />
              </a>
              <a href="/facebook" target="_blank" className=" text-[16px] text-gray-400 duration-300 hover:text-black">
                <FaFacebook />
              </a>
              <a href="/linkedin" target="_blank" className=" text-[16px] text-gray-400 duration-300 hover:text-black">
                <FaLinkedin />
              </a>
              <a href="/twitter" target="_blank" className=" text-[16px] text-gray-400 duration-300 hover:text-black">
                <FaLink />
              </a>
              <a href="/twitter" target="_blank" className=" hidden lg:block text-[16px] ml-[24px] text-gray-400 duration-300 hover:text-black">
                <FaRegBookmark />
              </a>
              <a href="/twitter" target="_blank" className=" text-[16px] text-gray-400 duration-300 hover:text-black">
                <MdMoreHoriz />
              </a>
            </div>
          </div>

          {/* content */}
          <div className=" mt-[32px] flex flex-col gap-8 mb-[32px]">
            {/* title */}
            <h1 className="text-3xl font-bold ">
              {post?.title}
            </h1>
            {/* img */}
            <img src="https://miro.medium.com/v2/resize:fit:1400/0*f4cwdhNW0jNMnDYW" alt="img" />

            {/* content */}
            {
              Array.from(Array(5))?.map((_, idx) => (
                <p key={`p-${idx}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In autem natus, quod voluptatum inventore delectus dolor, laudantium iste nemo fugit odio quos reiciendis nisi nam vel, labore doloremque est nobis.
                  Eaque voluptate possimus rem harum veniam. Dolorum nemo expedita laboriosam! Repellendus ipsum minus pariatur assumenda eos exercitationem nihil distinctio suscipit tempora ipsam totam, nam facere cupiditate, officiis, obcaecati nesciunt dignissimos.
                  Laudantium ad, nesciunt id optio pariatur illo ab corporis, quibusdam impedit dicta dignissimos facilis natus maxime rem. Nihil iusto inventore, veniam facilis vero beatae culpa, accusantium, molestiae cupiditate aliquam iure.
                </p>
              ))
            }
          </div>

          {/* tags */}
          <div className="flex flex-row flex-wrap gap-4 mb-[32px]">
            {
              tags?.map((tag, idx) => <Button key={`tag-${idx}`}>{tag}</Button>)
            }
          </div>

          {/* footer */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row items-center justify-center gap-1 text-gray-500 text-md">
                <BsHandThumbsUp /> <span className="cursor-pointer hover:text-black">100</span>
              </div>
              <div className="flex flex-row items-center justify-center gap-1 text-gray-500 text-md">
                <BiMessageRounded /> <span className="cursor-pointer hover:text-black">3</span>
              </div>
            </div>

            {/* toolbar */}
            <div className="flex flex-row items-center gap-4">
              <div className="text-gray-500 cursor-pointer hover:text-black text-md">
                <FaShareAlt />
              </div>
              <div className="text-gray-500 cursor-pointer hover:text-black text-md">
                <FaRegBookmark />
              </div>
              <div className="text-gray-500 cursor-pointer hover:text-black text-md">
                <MdMoreHoriz />
              </div>
            </div>
          </div>

          {/* more */}
          <div className=" mt-[32px] px-[24px] flex flex-col gap-8 bg-[#FAFAFA]">
            <div className="mt-[24px]">
              <div className="flex flex-row justify-between item-center">
                <h1 className="text-lg font-normal"> More from Typeform's Engineering Blog</h1>
                <Button>Follow</Button>
              </div>
              <p className="text-sm font-normal text-gray-500">
                Engineer-provoking. A little witty. Definitely nerdy. Sometimes revelational.
                In code -and humans- we trust. → https://developer.typeform.com/
              </p>
            </div>
            {
              morePostsLoading ? (
                <PostSkeleton counts={2} />
              ) : (
                morePosts?.map((post, idx) => (
                  <PostCard
                    key={idx}
                    post={post}
                    hiddenLine={true}
                    size={"sm"}
                    showThumbnail={true}
                  />
                ))
              )
            }
          </div>
        </div>
      </div>

      {/* user */}
      <div className="hidden lg:block lg:col-span-1">
        <div className="flex flex-col px-[48px] gap-4">
          <Button styles=" bg-black text-white hover:bg-black/80">Get unlimited access</Button>

          <div className="mt-[32px] flex flex-col gap-4 ">
            {/* avatar */}
            <img
              className=" w-[84px] h-[84px] rounded-full object-cover shadow-xl"
              src="https://images.pexels.com/photos/14282982/pexels-photo-14282982.jpeg"
              alt="about-me"
            />

            {/* name */}
            <div className=" text-[16px]">
              <h3 className="font-normal tracking-wide">Joshua Almodovar</h3>
              <p className="font-light text-gray-500 cursor-pointer hover:text-gray-800">430 Followers</p>
            </div>

            <p className=" text-[14px] leading-[20px] text-[#757575] font-normal">
              Self Taught Data Analyst | Fitness Enthusiast | I Write about mindset, tech, and how to live a healthy lifestyle while working from home.
            </p>

            {/* actions */}
            <div className="flex flex-row gap-2 font-light">
              <Button styles=" bg-green-600 text-white hover:bg-green-800">Follow</Button>
              <Button styles=" bg-green-600 text-white hover:bg-green-800 items-center"><GrMail /></Button>
            </div>
          </div>

          {renderMostPopularPosts()}
        </div>
      </div>
    </div>
  )
}

export default Post