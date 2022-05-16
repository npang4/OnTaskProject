import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OnTask from "../navbar/OnTask-Logo.png";
import './Home.css';

const HomeNav = () => {

    return( 
        <div className="nav-container">
        <div>
          <Link to="/">
          {" "}
          <img src={OnTask} className="logo" />{" "}
        </Link>
        </div>
        <div className="search_bar"></div>
      <ul>
        <li>
          <Link to="/login" style={{marginRight: "30px"}}>Log in</Link>
          {/* needs to be change -> Link to = "registration page" */}
          <Link to="/register" style={{marginRight: "40px"}}>Sign up</Link>

  
        </li>
      </ul>
      
    </div>
       )
};

export default HomeNav;
