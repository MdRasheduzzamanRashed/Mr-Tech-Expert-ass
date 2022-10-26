import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa";

const CourseDetails = () => {
  const course = useLoaderData();
  const {
    title,
    author,
    details,
    image_url,
    rating,
    syllabus,
    duration,
    topic_id,
  } = course;
  return (
    <div className="w-3/4 mx-auto dark:text-white py-10">
      <Card imgAlt={title} imgSrc={image_url}>
        <h5 className="text-3xl text-center font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <p className=" mt-2 text-lg font-medium">
                Trainer: {author.name}
              </p>
              <small className=" text-sm">
                Experience: {author.experience}
              </small>
            </div>
            <div>
              <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
            </div>
          </div>
          <div className="mb-3 flex items-center justify-between">
            <div className="mt-2.5 flex items-center">
              <div className="bg-orange-500 mr-2 p-0.5 rounded">
                <FaStar className="text-white bg-orange-500"></FaStar>
              </div>
              <span className="mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {rating.number}
              </span>
              <span className="rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {rating.badge}
              </span>
              <span className="rounded ml-3 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {duration}
              </span>
            </div>
            <div>
              <span className="text-xl font-medium text-gray-900 dark:text-white">
                Course Fee: {course.course_fee} BDT
              </span>
            </div>
          </div>
          <div>{details}</div>
          <div>
            <h3 className="bg-orange-500 text-2xl mt-4 mb-3 p-2 rounded">
              {syllabus.a.title}
            </h3>
            <p>{syllabus.a.info}</p>
          </div>
          <div>
            <h3 className="bg-orange-500 text-2xl mt-4 mb-3 p-2 rounded">
              {syllabus.b.title}
            </h3>
            <p>{syllabus.b.info}</p>
          </div>
          <div>
            <h3 className="bg-orange-500 text-2xl mt-4 mb-3 p-2 rounded">
              {syllabus.c.title}
            </h3>
            <p>{syllabus.c.info}</p>
          </div>
          <div className="flex items-center justify-between">
            <Link
              to={`/enrollment/${topic_id}`}
              className="rounded-lg bg-blue-700 px-5 mt-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CourseDetails;
