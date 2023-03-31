import React, { useEffect, useState } from 'react'
import Button from '../common/components/Button';
import DescriptionBox from '../common/components/DescriptionBox';
import PostCard from '../features/posts/PostICard';
import PostList from '../features/posts/PostList'
import PostSkeleton from '../features/posts/PostSkeleton';
import { useGetPostsQuery } from '../features/posts/postsSlice';
import { IPost } from '../features/posts/types';
import UserCard from '../features/users/UserCard'

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const { isLoading, isFetching, isSuccess, data, error } = useGetPostsQuery({ page, pageSize: 10 });
  const [posts, setPosts] = useState<IPost[]>([]);
  const [mostPopularsLoading, setMostPopularsLoading] = useState<boolean>(false);
  const mostPopulars: IPost[] = [
    { id: 1, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
    { id: 2, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
    { id: 3, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" }
  ];

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = e.target.documentElement.scrollTop + window.innerHeight;

      if (currentHeight + 1 > scrollHeight) {
        setPage(page + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  useEffect(() => {
    if (data) {
      setPosts(prev => [...prev, ...data]);
    }
  }, [data]);

  const renderMostPopularPosts = () => {
    return (
      <DescriptionBox
        title="Most Populars"
        showMore={{ name: "See more pupular posts", url: "/" }}
      >
        {
          mostPopularsLoading ? (
            <PostSkeleton counts={2} />
          ) : (
            mostPopulars?.map((post, idx) => (
              <PostCard
                key={idx}
                post={post}
                hiddenLine={true}
                size={"sm"}
                showFooter={false}
                showContent={false}
                showThumbnail={false}
              />
            ))
          )
        }
      </DescriptionBox>
    );
  }

  const renderRecommendedTopics = (
    <DescriptionBox
      title="Recommended topics"
      showMore={{ name: "See more topics", url: "/" }}
    >
      <div className="flex flex-row flex-wrap gap-4 ">
        {
          ["Data Science", "Software Enginering", "Artificial Intelligence", "System Design Interview", "Software Development", "Coding"]?.map((topic, idx) => <Button key={idx}>{topic}</Button>)
        }
      </div>
    </DescriptionBox>
  )

  return (
    <section className=" w-full flex flex-col lg:flex-row py-[32px]">
      {/* post list */}
      <div className=" lg:basis-2/3">
        <PostList posts={posts} />
      </div>

      {/* about me */}
      <div className=" hidden lg:basis-1/3 border-l-[0.1px] border-black/30  py-[64px] px-[24px] lg:flex flex-col gap-4">
        <UserCard />

        {renderMostPopularPosts()}

        {renderRecommendedTopics}
      </div>
    </section>
  )
}

export default Home