import React from 'react'
import Button from '../common/components/Button';
import MostPopularList from '../common/components/DescriptionBox';
import PostCard from '../features/posts/PostICard';
import PostList from '../features/posts/PostList'
import { useGetPostsQuery } from '../features/posts/postsSlice';
import { IPost } from '../features/posts/types';
import UserCard from '../features/users/UserCard'

const Home = () => {
  const { isLoading, isFetching, isSuccess, data: posts, error } = useGetPostsQuery();
  const mostPopulars: IPost[] = [
    { id: 1, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
    { id: 2, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" },
    { id: 3, userId: 1, title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", content: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto" }
  ]

  const renderMostPopularPosts = (
    <MostPopularList
      title="Most Populars"
      showMore={{ name: "See more pupular posts", url: "/" }}
    >
      {
        mostPopulars?.map(post => (
          <PostCard
            post={post}
            hiddenLine={true}
            size={"sm"}
            showFooter={false}
            showContent={false}
            showThumbnail={false}
          />
        ))
      }
    </MostPopularList>
  );

  const renderRecommendedTopics = (
    <MostPopularList
      title="Recommended topics"
      showMore={{ name: "See more topics", url: "/" }}
    >
      <div className=" flex flex-row gap-4 flex-wrap">
        {
          ["Data Science", "Software Enginering", "Artificial Intelligence", "System Design Interview", "Software Development", "Coding"]?.map(topic => <Button>{topic}</Button>)
        }
      </div>
    </MostPopularList>
  )

  return (
    <section className=" w-full flex flex-col lg:flex-row">
      {/* post list */}
      <div className=" lg:basis-2/3">
        <PostList posts={posts} />
      </div>

      {/* about me */}
      <div className=" hidden lg:basis-1/3 border-l-[0.1px] border-black/30  py-[64px] px-[24px] lg:flex flex-col gap-4">
        <UserCard />

        {renderMostPopularPosts}

        {renderRecommendedTopics}
      </div>
    </section>
  )
}

export default Home