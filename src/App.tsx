import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BaseLayout from './common/components/BaseLayout';
import PostList from './features/posts/PostList';
import Post from './features/posts/Post';
import Home from './pages/Home';

const router = createBrowserRouter([
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
  },
]);

const App = () => {
  return (
    <div className="App">
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </div>
  );
}

export default App;
