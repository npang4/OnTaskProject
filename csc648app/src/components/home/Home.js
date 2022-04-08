import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import OnTask from "../navbar/OnTask-Logo.png";
import './Home.css';
import HomeNav from "./HomeNav";
const Home = () => {
    const homeNavbar = (<HomeNav />);
    return(
      <>

<div className="background-container">
{/* {if logged in ? <header> : <otherheader> */}
{homeNavbar}
    <div className="inside-container">
        <h1> Start getting productive with OnTask </h1>
          <div className="getStarted-button">
          <ul>
            <li>
              <Link to="/login">Get Started </Link>
            </li>
          </ul>
          </div>
    </div>
</div>
</>
    )
    };

export default Home;