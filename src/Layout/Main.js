import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Pages/Shared/Footer/Footer";
import NavBar from "./../Components/Pages/Shared/Header/NavBar";

const Main = () => {
  return (
    <div className=" bg-white dark:bg-slate-800 h-full">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
