import React from "react";
import { Outlet } from "react-router-dom";
import Foot from "../Components/Pages/Shared/Foot/Foot";
import NavBar from "./../Components/Pages/Shared/Header/NavBar";

const Main = () => {
  return (
    <div className=" bg-white dark:bg-slate-800 h-full">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Foot></Foot>
    </div>
  );
};

export default Main;
