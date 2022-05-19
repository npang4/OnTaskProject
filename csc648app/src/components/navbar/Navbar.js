import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import OnTask from "./OnTask-Logo.png";
import ProfileIcon from "./profileicon.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/loginActions";
import { connect } from "react-redux";

const Navbar = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div>

        <Link to="/">
          {" "}<img src={OnTask} className="logo" />

          {" "}
        </Link>
      </div>
      <div className="search_bar"></div>
      <ul>
        <li>
          <Link to="/about">About</Link>
          
        </li>
      </ul>
      {props.email.length == 0 ?  (<ul>
        <li>
        {props.email.length == 0 ?  <Link to="/register">Sign-up</Link> : ""}
        </li>
      </ul>) : ""}
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

// mapping state to props
const mapStateToProps = (state) => {
  return { email: state.login.email };
};



export default connect(mapStateToProps)(Navbar);
