import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./../Components/Pages/Shared/Header/NavBar";

const Main = () => {
  return (
    <div className='h-screen bg-[url("https://live.staticflickr.com/65535/52452866624_3c6d5b135b_h.jpg")] bg-no-repeat bg-cover'>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
