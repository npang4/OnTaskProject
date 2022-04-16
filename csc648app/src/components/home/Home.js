import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {createStore} from "redux";
import {combineReducers} from "../../redux/reducers/rootReducer";
import { Link } from "react-router-dom";
import OnTask from "../navbar/OnTask-Logo.png";
import './Home.css';
import HomeNav from "./HomeNav";
import Navbar from "../navbar/Navbar";
const Home = () => {
    const homeNavbar = (<HomeNav />);
    const loggedIn = useDispatch(state => state.loggedIn);
    return(
      <>

<div className="background-container">
{/* {if logged in ? <header> : <otherheader> */}
{/* <h1>is {loggedIn ?<HomeNav/> :<Navbar />}</h1> */}
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