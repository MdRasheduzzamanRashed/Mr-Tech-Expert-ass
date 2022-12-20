import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Flowbite,
  Navbar,
  Button,
} from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo_light from "../../../../assets/logo/logo.png";
import { AuthContext } from "./../../../../context/AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((e) => console.error(e));
  };
  return (
    <Navbar
      className=" bg-slate-300 bg-opacity-40 dark:bg-slate-300 dark:bg-opacity-10"
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand>
        <div className="flex flex-col md:flex-row items-center">
          <img src={logo_light} className="h-9" alt="Mr Tech Expert" />
          <p className=" text-orange-500 ml-2 uppercase font-black md:text-3xl lg:text-4xl">
            Mr Tech Expert
          </p>
        </div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <>
          {user?.uid ? (
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={
                <Avatar
                  alt="Profile pic"
                  img={user?.photoURL}
                  rounded={true}
                  title="User name"
                />
              }
            >
              <Dropdown.Header>
                <Avatar
                  alt="Profile pic"
                  img={user?.photoURL}
                  rounded={true}
                  title="User name"
                />
                <span className="block text-sm">{user?.displayName}</span>
              </Dropdown.Header>
              <Dropdown.Item>{user?.email}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <>
              <Navbar className="mr-2 bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black">
                <Link to="/login">Login</Link>
              </Navbar>
              <Navbar className="bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black">
                <Link to="/signup">Register</Link>
              </Navbar>
            </>
          )}
        </>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar className="bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black mt-1 md:mt-0">
          <Link to="/">Home</Link>
        </Navbar>
        <Navbar className="bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black mt-1 md:mt-0">
          <Link to="/course">Courses</Link>
        </Navbar>
        <Navbar className="bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black mt-1 md:mt-0">
          <Link to="/my-course">My Courses</Link>
        </Navbar>
        <Navbar className="bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black mt-1 md:mt-0">
          <Link to="/blogs">Blogs</Link>
        </Navbar>
        <Navbar className="bg-opacity-60 rounded-lg hover:bg-opacity-100 dark:bg-white dark:bg-opacity-40 dark:hover:bg-opacity-100 dark:text-white dark:hover:text-black mt-1 md:mt-0">
          <Link to="/about">About</Link>
        </Navbar>

        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
