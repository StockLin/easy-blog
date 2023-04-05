import React, { useEffect } from "react"
import PostCard from "./PostCard";
import PostSkeleton from "./PostSkeleton";
import { useGetPostQuery, useGetPostsQuery } from "./postsSlice";
import { IPost } from "./types";

interface IProps {
  posts?: IPost[],
  loading?: boolean,
}

const PostList: React.FC<IProps> = ({ posts, loading = false }) => {

  return loading ? (
    <div className="p-8 ">
      <PostSkeleton counts={4} showImage={true} />
    </div>
  ) : (
    <div className="flex flex-col gap-4">
      {
        posts?.map((post, idx) => (
          <PostCard key={`post-${idx}`} post={post} hiddenLine={idx === 0} />
        ))
      }
    </div>
  )
}

export default PostList