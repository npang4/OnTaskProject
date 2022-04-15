import logo from "./logo.svg";
import Chris from "./components/Team/chris/Chris";
import Rhoanna from "./components/Team/rhoanna/Rhoanna";
import "./App.css";
import Homepage from "./components/Team/Homepage";
// import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Nelson from "./components/Team/nelson/Nelson";
import Jia from "./components/Team/jia/jia";
import Michael from './components/Team/michael/michael';
import Kim from './components/Team/kim/Kim';
import Login from './components/login/Login';
import { useSelector } from "react-redux";
import TodoList from "./components/to-do-list/TodoList";
import Navbar from "./components/navbar/Navbar";
import { connect } from 'react-redux'
import LandingPage from "./components/LandingPage";
import WorkIntervals from "./components/work-intervals/work-intervals"
import WorkIntervals2 from "./components/work-intervals/WorkTimer"
import DraftTimer from "./components/work-intervals/work-test"
import Test from "./components/work-intervals/work-home"
import Register from "./components/registration/Register";
import React,{useState} from "react";



  // "proxy": "http://localhost:4000",

  // ^^ IMPORTANT READDDDDDD

function App(props) {

  return (
    <div className="App">
      {/* Add your path to your component here */}

     <Navbar />
      
      <Routes>
        {/* About Page Route */}
        <Route path="/about" element={<Homepage />} />
         {/* Home Page Route */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* Team Info Routes */}
        <Route path="/chris" element={<Chris />} />
        <Route path="/nelson" element={<Nelson />} />
        <Route path="/rhoanna" element={<Rhoanna />} />
        <Route path="/jia" element={<Jia />} />
        <Route path='/michael' element={<Michael />} />
        <Route path='/kim' element={<Kim />} />

        {/* Landing page Route */}
        <Route path='/login' element={<LandingPage/>} />

        {/* Route for Work-Study Intervals */}
        {/* <Route path='/work-intervals' element={<WorkIntervals/>}/> */}


        <Route path='/work-intervals' element={<DraftTimer/>}/>

        {/* RJ is still working on this one. This one should be used for final development */}
        {/* <Route path='/work-test' element={<Test/>}/> */}

        {/* Registration page Route */}
        <Route path="/register" element={<Register/>} />
      </Routes>



    </div>
  );
}


const mapStateToProps = (state) => {
  return { logIn: state.login.loggedIn }
}
export default connect(mapStateToProps)(App);
