import React, { useEffect } from "react"
import PostCard from "./PostICard";
import { useGetPostQuery, useGetPostsQuery } from "./postsSlice";
import { IPost } from "./types";

const PostList: React.FC = () => {
  const { isLoading, isFetching, isSuccess, data: posts, error } = useGetPostsQuery();

  return isFetching ? (
    <p>Loading</p>
  ) : isSuccess ? (
    <div className=" flex flex-col p-8 gap-4">
      {
        posts.map(post => (
          <PostCard post={post} />
        ))
      }
    </div>
  ) : error ? (
    <p>{JSON.stringify(error)}</p>
  ) : (
    <p>Unexpected Error</p>
  )
}

export default PostList