import React, { useEffect } from "react"
import PostCard from "./PostICard";
import { useGetPostQuery, useGetPostsQuery } from "./postsSlice";
import { IPost } from "./types";

interface IProps {
  posts?: IPost[],
  loading?: boolean,
}

const PostList: React.FC<IProps> = ({ posts, loading = false }) => {

  return loading ? (
    <p>Loading</p>
  ) : (
    <div className=" flex flex-col p-8 gap-4">
      {
        posts?.map(post => (
          <PostCard post={post} />
        ))
      }
    </div>
  )
}

export default PostList