import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CreatePost from "./Components/CreatePost.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PostList from "./Components/PostList.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList /> },
      { path: "/create-post", element: <CreatePost /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
