import React from "react";
import { Card, Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-screen py-64">
      
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-32 w-32 rounded-full shadow-lg"
            src="https://scontent.fdac45-1.fna.fbcdn.net/v/t1.6435-9/62088638_2170552559722425_3548267371661623296_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeG4QRhYghkip7tdIj6CYPNyZZef6uoKlcJll5_q6gqVwjIlIhyOtZwqxtY9fPsFoTGmHqeipW2qIpTVlETidC9M&_nc_ohc=91hPpsfzIZoAX_K0Mq7&_nc_ht=scontent.fdac45-1.fna&oh=00_AT_COe3CdUnDmA-vRGCBjuOsJl-DVssCOMPOgBOu8TFgKg&oe=637D541C"
            alt=""
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Md Rasheduzzaman
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Full Stack Web Developer
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Link
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add friend
            </Link>
            <Link
              href="#"
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Message
            </Link>
          </div>
        </div>
    </div>
  );
};

export default About;
