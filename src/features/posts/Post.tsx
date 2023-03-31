import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../users/usersSlice";
import { useGetPostQuery } from "./postsSlice";

const Post: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data: post } = useGetPostQuery(id);
  const { data: user } = useGetUserQuery(post?.userId);


  return isLoading ? (
    <p>Fetching Post</p>
  ) : (
    <div className="grid grid-cols-3  grap-8">
      {/* post */}
      <div className="col-span-2 ">

        {post?.title}
      </div>
      {/* user */}
      <div className="col-span-1 ">
        {user?.name}
      </div>
    </div>
  )
}

export default Post