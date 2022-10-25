import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const coursesTopics = useLoaderData();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="text-white">
      <h1 className="text-center text-4xl font-medium uppercase bg-white bg-opacity-20 py-4">
        Explore The Courses
      </h1>
      <div className="grid grid-cols-4 ml-4">
        <div className="bg-white bg-opacity-20 mt-16 py-5">
          <div className=" bg-slate-50 bg-opacity-25 py-2">
            <h2 className="text-center text-3xl">Courses</h2>
          </div>
          <div className="text-center">
            {coursesTopics.map((topic) => (
              <p
                className="py-2 hover:bg-slate-50 hover:bg-opacity-25"
                key={topic.id}
              >
                <Link to={`/course/${topic.id}`}>{topic.name}</Link>
              </p>
            ))}
          </div>
        </div>

        <div className="col-span-3 col-start-2 mx-4 mt-16">
                  <div className="grid grid-cols-3 gap-3">
                      {
                          courses.map(course=><Course key={course._id} course={course}></Course>)
                      }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
