import React from "react";
import { Link } from "react-router-dom";
import tech from '../../../assets/images/back.png';

const Home = () => {
  return (
    <div className="md:mx-8 flex flex-col md:flex-row items-center justify-between ">
      <div className="md:px-10 md:mt-0 mt-20 text-center md:text-left">
        <h1 className="text-orange-500 text-lg md:text-2xl font-bold uppercase mb-5">
          Welcome to Mr Tech Expert
        </h1>
        <h1 className=" text-orange-500 text-3xl md:text-6xl lg:text-8xl font-bold uppercase mb-8">
          Smart Technical Institute
        </h1>
        <button className=" bg-orange-500 px-4 py-2 md:mb-0 mb-8 rounded-lg text-white font-medium">
          <Link to='/about'>Read More</Link>
        </button>
      </div>
      <div>
        <img className="h-40 md:h-full" src={tech} alt="" />
      </div>
    </div>
  );
};

export default Home;
