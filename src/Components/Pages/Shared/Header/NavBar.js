import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import logo_light from "../../../../assets/logo/logo-light.png";

const NavBar = () => {
  return (
    <Navbar className=" bg-transparent" fluid={true} rounded={true}>
      <Navbar.Brand href="#">
        <img src={logo_light} className="h-9 sm:h-9" alt="Mr Tech Expert" />
      </Navbar.Brand>
      <div className="flex md:order-2">
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
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar className=" bg-opacity-30 rounded-lg hover:bg-opacity-70">
          <Link to="/">Home</Link>
        </Navbar>
        <Navbar className=" bg-opacity-30 rounded-lg hover:bg-opacity-70">
          <Link to="/courses">Courses</Link>
        </Navbar>
        <Navbar className=" bg-opacity-30 rounded-lg hover:bg-opacity-70">
          <Link to="/blogs">Blogs</Link>
        </Navbar>
        <Navbar className=" bg-opacity-30 rounded-lg hover:bg-opacity-70">
          <Link to="/about">About</Link>
        </Navbar>
        <Navbar className=" bg-opacity-30 rounded-lg hover:bg-opacity-70">
          <Link to="/contact">Contact</Link>
        </Navbar>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
