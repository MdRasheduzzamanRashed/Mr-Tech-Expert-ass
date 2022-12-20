import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full h-screen py-10 lg:py-60">
      <div className="flex flex-col items-center pb-10 mx-5">
        <img
          className="mb-3 h-32 w-32 rounded-full shadow-lg"
          src="https://i.ibb.co/7XPc3CW/rashed.jpg"
          alt="Profile"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Md Rasheduzzaman
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          MERN Stack Web Developer
        </span>
        <div>
          <p className="text-center dark:text-white">
            I am an ordinary Bangladeshi. Eat and sleep. I love to teach people
            but I don't want to be a teacher. <br /> If anyone need help i try
            my best to help him/them. In this site I am trying to make a web
            site for a training institute. Thank you.
          </p>
        </div>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            target="blank"
            href="https://www.facebook.com/mrashed.cse"
            className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <FaFacebook />
          </a>
          <a
            target="blank"
            href="https://www.youtube.com/channel/UC3sy7-a8zue9rB78pH0ivmg"
            className="inline-flex items-center rounded-lg bg-red-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            <FaYoutube />
          </a>
          <a
            target="blank"
            href="https://twitter.com/Rasheduzzaman_"
            className="inline-flex items-center rounded-lg bg-sky-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
          >
            <FaTwitter />
          </a>
          <a
            target="blank"
            href="https://github.com/MdRasheduzzamanRashed"
            className="inline-flex items-center rounded-lg bg-gray-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
