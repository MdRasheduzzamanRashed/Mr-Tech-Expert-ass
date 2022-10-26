import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Course = ({ course }) => {
  return (
    <div className="w-full">
      <div className=" bg-slate-400 bg-opacity-40 rounded-xl">
        <div>
          <img
            className="w-full h-72 rounded-t-xl"
            src={course.image_url}
            alt={course.title}
          />
        </div>
        <div className="p-6">
          <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {course.title}
          </h5>
          <div className="flex items-center justify-between">
            <div>
              <p className=" mt-2 text-lg font-medium">
                Trainer: {course.author.name}
              </p>
              <small className=" text-sm">
                Experience: {course.author.experience}
              </small>
            </div>
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={course.author.img}
                alt=""
              />
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="mt-2.5 flex items-center">
              <div className="bg-orange-500 mr-2 p-0.5 rounded">
                <FaStar className="text-white bg-orange-500"></FaStar>
              </div>
              <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {course.rating.number}
              </span>
              <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {course.rating.badge}
              </span>
            </div>
            <div>
              <span className="text-xl font-medium text-gray-900 dark:text-white">
                Course Fee: {course.course_fee} BDT
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={`/course/${course.category_id}`}
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
            </Link>
            <Link
              to=""
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
