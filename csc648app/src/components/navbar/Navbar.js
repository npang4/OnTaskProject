import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import OnTask from "./OnTask-Logo.png";
import ProfileIcon from "./profileicon.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/loginActions";
import addIcon from "./addusericon.png";
import collab from "./collab.js";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
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
        <button onClick={() => setIsOpen(true)} className="collab">
          <img src={addIcon} className="addicon" />
        </button>
        {/*Once button is clicked, the collab pop up page will show*/}
        <collab open={isOpen} onClose={() => setIsOpen(false)}></collab>
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
