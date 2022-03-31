import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import OnTask from "./OnTask-Logo.png";
import ProfileIcon from "./profileicon.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/loginActions";
import addIcon from "./addusericon.png";
import Collab from "./Collab.js";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div>
        <Link to="/">
          {" "}
          <img src={OnTask} className="logo" />{" "}
        </Link>
      </div>
      <div className="search_bar"></div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="collabButton">
        {/*On Click, this will generate a lightbox popup*/}
        <Collab />
      </div>
      <div>
        {/* On Click, this will log out the user */}
        <img
          src={ProfileIcon}
          className="profileicon"
          onClick={() => {
            dispatch(logOut());
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
