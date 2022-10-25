import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../Components/Pages/Home/Home";
import Courses from './../Components/Pages/Courses/Courses';
import Contact from './../Components/Pages/Contact/Contact';
import About from './../Components/Pages/About/About';
import Blogs from './../Components/Pages/Blogs/Blogs';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        loader: ({ params }) => fetch("http://localhost:5000/courses-topics"),
        element: <Courses></Courses>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);
