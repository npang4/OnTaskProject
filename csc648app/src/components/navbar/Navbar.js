import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import OnTask from "./OnTask-Logo.png";
import ProfileIcon from "./profileicon.png";

const Navbar = () => {
  return (
    <div className="nav">
      <div>
        <Link to="/">
          {" "}
          <img src={OnTask} className="logo" />{" "}
        </Link>
      </div>
      <div className="search_bar">
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div>
        <Link to="/login">
          <img src={ProfileIcon} className="profileicon" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
