import React, { useState, useEffect } from "react";
import './work-intervals.css';
import { useTimer } from 'react-timer-hook';

const WorkIntervals = () => {

    const [workMinutes, setWorkMinutes] = useState("");
    const [workSeconds, setWorkSeconds] = useState("");
    const [breakMinutes, setBreakMinutes] = useState("");
    const [breakSeconds, setBreakSeconds] = useState("");


    const {
          seconds,
          minutes,
          hours,
          days,
          isRunning,
          start,
          pause,
          resume,
          restart,
        } = useTimer({onExpire: () => console.warn('onExpire called') });


    

    const handleSubmit = (e) => {
        // e.preventDefault();
        let workMin = document.getElementById("work-min").value;
        let workSec = document.getElementById("work-sec").value;
        let breakMin = document.getElementById("break-min").value;
        let breakSec = document.getElementById("break-sec").value;

        console.log(workMin + ":" + workSec);
        console.log(breakMin + ":" + breakSec);
        console.log("clicked")

        document.getElementById("change").innerHTML = 
        `<div>
                <h2 class="fonts bold">WORK TIME</h2>
                <h1 class="fonts bold timer">${minutes}:${seconds}</h1>
                <button class="work-button">PAUSE</button>
        </div>`

        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }

    return (
        <div>
            <div className="container-title">
                <h4 className="fonts bold white">Work Interval Timer</h4>
            </div>
            <div className="container-work">
            <div id="change">
                <p className="fonts bold title">Set a work time</p>
                <div className="form-inline">
                    <select id="work-min" className="input-width" type="number" value={workMinutes} onChange={(e) => setWorkMinutes(e.target.value)}>
                        <option>00</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                    </select>
                    :
                    <select id="work-sec" className="input-width" type="number" value={workSeconds} onChange={(e) => setWorkSeconds(e.target.value)}>
                        <option>00</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                    </select>
                </div>
                <p className="fonts bold title">Set a break time</p>
                <div className="form-inline">
                    <select id="break-min" className="input-width" type="number" value={breakMinutes} onChange={(e) => setBreakMinutes(e.target.value)}>
                        <option>00</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                    </select>
                    :
                    <select id="break-sec" className="input-width" type="number" value={breakSeconds} onChange={(e) => setBreakSeconds(e.target.value)}>
                        <option>00</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                        <option>60</option>
                    </select>
                </div>
                <button onClick={(e) => handleSubmit(e)}className="work-button">START</button>
            </div>
            </div>
        </div>

    )
}

export default WorkIntervals;