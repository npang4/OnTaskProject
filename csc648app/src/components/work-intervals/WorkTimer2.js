import React from "react";
import './work-intervals.css';
import { useTimer } from 'react-timer-hook';

const WorkIntervals3 = (props) => {

    const {
          seconds,
          start,
          minutes,
          isRunning,
          restart,
          pause,
          resume,
        } = useTimer({ onExpire: () => console.warn('onExpire called') });

    const handleSubmit = (e) => {
        // props.onClick();
        e.preventDefault();

        // document.getElementById("change").innerHTML = 
        // `<h1 class="fonts bold timer">${minutes}:${seconds}</h1>`;

        console.log("clicked")

        let time = new Date();
        time.setSeconds(time.getSeconds() + (props.timer.workSec/1) + (props.timer.workMin * 60));
        if (time = (props.timer.workSec/1) + (props.timer.workMin * 60)) {
            restart(time);
        } else {
            restart(time);
        }
        
        // restart(time)
        // setRunTimer(true);
    }

    return (
        <div>
            <div className="container-title">
                <h4 className="fonts bold white">Work Interval Timer</h4>
            </div>
            <div className="container-work">
            <div>
                <div>
                        <h2 className="fonts bold">WORK TIME</h2>
                        <h1 className="fonts bold timer" id="change">{minutes}:{seconds}</h1>
                        {/* <h1 className="fonts bold timer" id="change">{!runTimer ? `${props.timer.workMin}:${props.timer.workSec}` : `${minutes}:${seconds}`}</h1> */}
                </div>
                <button onClick={(e) => handleSubmit(e)} className="work-button-2">START</button>
                <button onClick={pause} className="work-button-2">PAUSE</button>
                <div>
                    {/* <a className="fonts link" onClick={pause}>PAUSE</a>
                    <a style={{textDecoration: "none"}}> | </a> */}
                    <a className="fonts link" onClick={resume}>CONTINUE</a>
                </div>
            </div>
            </div>
        </div>

    )
}

export default WorkIntervals3;