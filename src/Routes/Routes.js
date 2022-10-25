import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../Components/Pages/Home/Home";
import Courses from "./../Components/Pages/Courses/Courses";
import Contact from "./../Components/Pages/Contact/Contact";
import About from "./../Components/Pages/About/About";
import Blogs from "./../Components/Pages/Blogs/Blogs";
import Login from './../Components/User/Login/Login';
import Register from './../Components/User/Register/Register';

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
        path: "/course",
        loader: ({ params }) => fetch("http://localhost:5000/course-topics"),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
]);
