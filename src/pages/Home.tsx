import React from 'react'
import PostList from '../features/posts/PostList'
import UserCard from '../features/users/UserCard'

const Home = () => {
  return (
    <section className=" w-full flex flex-col lg:flex-row">
      {/* post list */}
      <div className=" basis-2/3">
        <PostList />
      </div>

      {/* about me */}
      <div className=" relative basis-1/3 border-l-[0.1px] border-black/30 px-[24px]">
        {/* <div className=" fixed max-w-[360px]"> */}
        <UserCard />
        {/* </div> */}
      </div>
    </section>
  )
}

export default Home