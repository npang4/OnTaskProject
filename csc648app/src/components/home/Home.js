import React,{useState} from "react";
import { useDispatch,connect } from "react-redux";
import {createStore} from "redux";
import {combineReducers} from "../../redux/reducers/rootReducer";
import { Link } from "react-router-dom";
import OnTask from "../navbar/OnTask-Logo.png";
import './Home.css';
import HomeNav from "./HomeNav";
import Navbar from "../navbar/Navbar";
import Login from '../login/Login'
const Home = (props) => {
    const homeNavbar = (<HomeNav />);
    const loggedIn = useDispatch(state => state.loggedIn);
    return(
      <>

        <div className="background-container">
        {/* {if logged in ? <header> : <otherheader> */}
        {/* <h1>is {loggedIn ?<HomeNav/> :<Navbar />}</h1> */}
        {props.logIn ? <Navbar/> : <HomeNav/>}
            <div className="inside-container">

                <h1> Start getting productive with OnTask </h1>
                  <div>
                  {/* <ul>
                    <li>
                      <Link to="/login">Get Started </Link>
                    </li>
                  </ul> */}
                  <a href="/login"><button className="button-homepage">Get Started</button></a>
                  </div>
            </div>
        </div>
        </>
    )
    };

    
    const mapStateToProps = (state) => {
      return { logIn: state.login.loggedIn }
  }

export default connect(mapStateToProps)(Home);