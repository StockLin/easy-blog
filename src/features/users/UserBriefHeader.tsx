import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "./types";

interface IProps {
  user?: IUser
}

const UserBriefHeader: React.FC<IProps> = ({ user }) => {
  return (
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
  )
}

export default UserBriefHeader;