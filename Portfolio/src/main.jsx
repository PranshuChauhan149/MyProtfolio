import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/about/about.jsx";
import Resume from "./pages/resume/Resume.jsx";
import Prot from "./pages/Prot/Prot.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Blog from "./pages/Blog/Blog.jsx";

const router = createBrowserRouter([
  {
    path: "/", 
    element:<App></App>, 
    children:[
     {
      path:"/",
      element:<About></About>
     },
    {
      path:"/resume",
      element:<Resume></Resume>

    }
    ,
    {
      path:"/portfolio",
      element:<Prot></Prot>

    }
    ,
    {
      path:"/contact",
      element:<Contact/>
    },

    {
      path:"/blog",
      element:<Blog></Blog>
    }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
