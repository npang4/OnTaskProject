import logo from "./logo.svg";
import Chris from "./components/Team/chris/Chris";
import Rhoanna from "./components/Team/rhoanna/Rhoanna";
import "./App.css";
import Homepage from "./components/Team/Homepage";
import Home from "./components/home/Home";
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
import React,{useState} from "react";
import DraftTimer from "./components/work-intervals/work-intervals";



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
        <Route path="/" element={<Home />} />
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

        {/* Path for work */}
        <Route path='/work-intervals' element={<DraftTimer/>}/>

      </Routes>



    </div>
  );
}


const mapStateToProps = (state) => {
  return { logIn: state.login.loggedIn }
}
export default connect(mapStateToProps)(App);
