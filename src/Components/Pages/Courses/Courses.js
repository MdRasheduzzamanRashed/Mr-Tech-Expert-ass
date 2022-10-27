import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const coursesTopics = useLoaderData();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(
      "https://b610-lerning-platform-server-side-md-rasheduzzaman-rashed.vercel.app/course"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="dark:text-white mb-5">
      <h1 className="text-center text-4xl font-medium uppercase py-4">
        Explore The Courses
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-4">
        <div className=" bg-opacity-20 mt-16">
          <div className="dark:bg-slate-200 bg-slate-500 bg-opacity-25 py-2 rounded-t-lg">
            <h2 className="text-center text-slate-800 text-3xl">Courses</h2>
          </div>
          <div className="text-center">
            {coursesTopics.map((topic) => (
              <p
                className="py-2 hover:bg-slate-700 dark:hover:bg-slate-50 dark:hover:bg-opacity-25  hover:bg-opacity-20"
                key={topic.id}
              >
                <Link to={`/course/${topic.id}`}>{topic.name}</Link>
              </p>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 lg:col-span-3 mx-4 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {courses.map((course) => (
              <Course key={course._id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
