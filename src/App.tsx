import React from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";
import BaseLayout from './common/components/BaseLayout';
import PostList from './features/posts/PostList';
import Post from './features/posts/Post';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <PostList />,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      }
    ]
  }
]);

const App = () => {
  return (
    <div className="App text-gr">
      <SkeletonTheme baseColor="rgb(229, 231, 235)" highlightColor="rgb(243, 244, 246)">
        <RouterProvider router={router} />
      </SkeletonTheme>
    </div>
  );
}

export default App;
