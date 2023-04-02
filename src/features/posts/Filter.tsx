import React, { useState } from "react";
import { IPost } from "./types";



export const filterPosts = (posts: IPost[], category: string) => {
  return posts?.filter(post => post?.category === category);
}

interface IProps {
  category?: string,
  handleCategory?: (category: string) => void
}

const Filter: React.FC<IProps> = ({ category = "", handleCategory }) => {
  const categoryItems = [
    {
      id: 1,
      name: "Python"
    },
    {
      id: 2,
      name: "React"
    },
    {
      id: 3,
      name: "Typescript"
    },
    {
      id: 4,
      name: "Java"
    },
  ];

  const [targetItem, setTargetItem] = useState<number>(1);

  const onItemClick = (id: number) => {
    setTargetItem(id);

    // TODO
    // migrate api
  }

  return (
    <div className="flex flex-row gap-[32px] overflow-hidden overflow-y-scroll border-b-[1px] border-gray-300">
      {
        categoryItems.map((item) => (
          <div
            key={`item-${item.id}`}
            className={`${item.id === targetItem ? "active" : ""} py-[16px] text-sm text-gray-500 duration-300 cursor-pointer hover:text-black [&.active]:text-black [&.active]:border-b-[1px] [&.active]:border-black `}
            onClick={() => onItemClick(item.id)}
          >
            {item.name}
          </div>
        ))
      }
    </div>
  )
}

export default Filter