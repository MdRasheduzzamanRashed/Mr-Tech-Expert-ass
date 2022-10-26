import React from "react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Foot = () => {
  return (
    <div className="bg-slate-200 text-center w-full flex flex-col items-center justify-between py-2 px-10">
      <p>Design & Develop by Md Rasheduzzaman</p>
      <div className="flex items-center gap-3">
        <p>Follow us:</p>
        <FaFacebook />
        <FaTwitter />
        <FaYoutube/>
      </div>
    </div>
  );
};

export default Foot;
