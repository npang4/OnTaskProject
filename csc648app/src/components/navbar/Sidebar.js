import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './Sidebar.css';
import { BsPlus } from 'react-icons/bs';
import { FcClock, FcPlanner, FcCalendar } from 'react-icons/fc';
import Modal from "react-modal";
import { addTodolist } from '../../redux/actions/todoActions';
import TodoTemp from '../TodoTemp';
import { connect } from 'react-redux';


// this is for the side navigation bar
const Sidebar = (props) => {
    
    const style = {
        width: "12vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: '#f9f9f9'
    }

    const onClick = (e) => {
        console.log(e.target.innerText)
        props.onClick(e.target.innerText)
    }

    const [value, onChange] = useState(new Date());
    return (
        <div style={style}>

            <div style={{ paddingTop: '2em' }}>
                <button id='work-btn'><FcClock size={40} /> Work Interval </button>

            </div>
            {/* // this is where calender is? */}
            <div style={{ paddingTop: '5em' }}>
                CALENDER
                <Calendar onChange={onChange} value={value} />

            </div>

            <div style={{ paddingTop: '2em' }}>
                <button id='today-btn'> <FcCalendar size={40} /> Today</button>
            </div>

            <div style={{ paddingTop: '2em' }}>
                <button id='upcoming-btn'><FcPlanner size={40} /> Upcoming </button>

            </div>

            <div style={{ paddingTop: '5em' }}>
                <div style={{ color: "green" }}>
                    Todo Lists:
                    <button id='bsPlus' onClick={props.addTodo}> <BsPlus size={15} /> </button>
                    
                </div>
                {console.log(props.title)}
                {props.title.map((title) => <div onClick={
                    onClick}>
                    {title.title}
                </div>)}
            </div>
        </div>
    )
}

export default Sidebar 
