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
import logo_light from "../../../../assets/logo/logo-dark.png";
import { AuthContext } from './../../../../context/AuthProvider/AuthProvider';

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
      <Navbar.Brand href="#">
        <img src={logo_light} className="h-9 sm:h-9" alt="Mr Tech Expert" />
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
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded={true}
                  title="Bonnie Green"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <>
              <Button className="mr-2">
                <Link to="/login">Login</Link>
              </Button>
              <Button>
                <Link to="/signup">Register</Link>
              </Button>
            </>
          )}
        </>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar className=" bg-opacity-60 dark:bg-slate-300 dark:bg-opacity-60 dark:hover:bg-opacity-90 rounded-lg hover:bg-opacity-100">
          <Link to="/">Home</Link>
        </Navbar>
        <Navbar className=" bg-opacity-60 dark:bg-slate-300 dark:bg-opacity-60 dark:hover:bg-opacity-90 rounded-lg hover:bg-opacity-100">
          <Link to="/course">Courses</Link>
        </Navbar>
        <Navbar className=" bg-opacity-60 dark:bg-slate-300 dark:bg-opacity-60 dark:hover:bg-opacity-90 rounded-lg hover:bg-opacity-100">
          <Link to="/blogs">Blogs</Link>
        </Navbar>
        <Navbar className=" bg-opacity-60 dark:bg-slate-300 dark:bg-opacity-60 dark:hover:bg-opacity-90 rounded-lg hover:bg-opacity-100">
          <Link to="/about">About</Link>
        </Navbar>
        <Navbar className=" bg-opacity-60 dark:bg-slate-300 dark:bg-opacity-60 dark:hover:bg-opacity-90 rounded-lg hover:bg-opacity-100">
          <Link to="/contact">Contact</Link>
        </Navbar>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
