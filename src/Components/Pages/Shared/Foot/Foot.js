import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const Foot = () => {
  return (
    <div className="bg-slate-200 text-center w-full flex flex-col items-center justify-between py-2 px-10 sticky bottom-0">
      <p>Design & Develop by Md Rasheduzzaman</p>
      <div className="flex items-center gap-3">
        <p>Follow us:</p>
        <a target="blank" href="https://www.facebook.com/mrashed.cse">
          <FaFacebook />
        </a>
        <a
          target="blank"
          href="https://www.youtube.com/channel/UC3sy7-a8zue9rB78pH0ivmg"
        >
          <FaYoutube />
        </a>
        <a target="blank" href="https://twitter.com/Rasheduzzaman_">
          <FaTwitter />
        </a>
        <a target="blank" href="https://github.com/MdRasheduzzamanRashed">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export default Foot;
