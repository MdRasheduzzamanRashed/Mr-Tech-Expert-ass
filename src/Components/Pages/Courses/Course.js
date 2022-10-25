import { Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);
  return (
    <div className="w-full">
      <Card imgAlt="Topic's image" imgSrc={course.image_url}>
        <Link>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {course.title}
          </h5>
        </Link>
        <div className="mb-3 flex items-center justify-between">
          <div className="mt-2.5 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              strokeWidth="0"
              stroke="currentColor"
              className="w-5 h-5 bg-yellow-400 mr-2 rounded"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              {course.rating.number}
            </span>
            <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
              {course.rating.badge}
            </span>
          </div>
          <div>
            <span className="text-2xl font-medium text-gray-900 dark:text-white">
              Course Fee: $599
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
      </Card>
    </div>
  );
};

export default Course;
