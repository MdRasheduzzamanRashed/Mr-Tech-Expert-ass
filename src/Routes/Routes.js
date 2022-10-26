import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "./../Components/Pages/Home/Home";
import Courses from "./../Components/Pages/Courses/Courses";
import About from "./../Components/Pages/About/About";
import Blogs from "./../Components/Pages/Blogs/Blogs";
import Login from "./../Components/User/Login/Login";
import Register from "./../Components/User/Register/Register";
import CourseDetails from "./../Components/Pages/Courses/CourseDetails";
import Enrollment from "./../Components/Pages/Enrollment/Enrollment";
import PrivateRoute from "./PrivateRoute";
import TermsAndConditions from "./../Components/Pages/TermsAndContions/TermsAndConditions";

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
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/enrollment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
        element: (
          <PrivateRoute>
            <Enrollment></Enrollment>
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
    ],
  },
]);
