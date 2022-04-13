import React, {useState} from 'react';
import { useTimer } from 'react-timer-hook';
import './work-intervals.css'

function DraftTimer({ expiryTimestamp }) {

    const [workMinutes, setWorkMinutes] = useState("");
    const [workSeconds, setWorkSeconds] = useState("");
    const [breakMinutes, setBreakMinutes] = useState("");
    const [breakSeconds, setBreakSeconds] = useState("");
    const [timerName, setTimerName] = useState(false);

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
                <h1 class="fonts bold timer">${workMin}:${workSec}</h1>
                <button class="work-button">PAUSE</button>
        </div>`
    }

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
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div>
            <div className="container-title">
                <h4 className="fonts bold white">Work Interval Timer</h4>
            </div>
            <div className="container-work">
            <div id="change">
                <div className="form-inline">
                <p className="fonts bold title">Work time</p>
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
                        <option>30</option>
                        <option>45</option>
                    </select>
                    <p className="fonts bold title">Break time</p>
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
                        <option>30</option>
                        <option>45</option>
                    </select>
                </div>
                <h2 class="fonts bold bool">{isRunning ? (timerName ? "WORK TIME" : "BREAK TIME") : ""}</h2>
                <div>
                    <h1 class="fonts bold timer">{minutes}:{seconds}</h1>
                </div>
                <a style={{textDecoration: "none"}} className="fonts question"> {isRunning ? "" : (timerName ? "Ready for the next break?" : "Ready to start working?") } </a>
                <div className="form-inline center">
                    <button className="work-button font" onClick={() => {
                        let workMin = document.getElementById("work-min").value;
                        let workSec = document.getElementById("work-sec").value;
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + (workSec/1) + (workMin * 60));
                        restart(time)
                        setTimerName(true)

                    }}>START WORK</button>
                    <button className="break-button font" onClick={() => {

                        let breakMin = document.getElementById("break-min").value;
                        let breakSec = document.getElementById("break-sec").value;
                        const time = new Date();
                        time.setSeconds(time.getSeconds() + (breakSec/1) + (breakMin * 60));
                        restart(time)
                        setTimerName(false)
                    }}>START BREAK</button>
                </div>
    

                <div>
                <a className="fonts link" onClick={pause}>PAUSE</a>
                <a style={{textDecoration: "none"}}> | </a>
                <a className="fonts link" onClick={resume}>CONTINUE</a>
                </div>
            </div>
            </div>
        </div>
  );
}

export default DraftTimer;