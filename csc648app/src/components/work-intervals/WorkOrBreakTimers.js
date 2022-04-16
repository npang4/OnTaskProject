import React, { useState } from "react";
import { useTimer } from "react-timer-hook";
import './work-intervals.css';

const WorkOrBreak = (props) => {

  // boolean value for if user is on break time or work time
  const [onBreak, setOnBreak] = useState(false);

  // if user clicks this after the work timer is over, it'll move to break timer
  const clickOnWork = () => {
    // props.onClick();
    setOnBreak(true);
    console.log("true");
  }

  // if user clicks this after the break timer is over, it'll move to the work timer
  const clickOnBreak = () => {
    // props.onClick();
    setOnBreak(false);
    console.log("true");
  }

  // timer function using react-timer-hook
  function Timer({ expiryTimestamp }) {
    const {
      seconds,
      minutes,
      isRunning,
      pause,
      resume,
    } = useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called")
    });

    return (
          <div>
              <div className="container-title">
                  <h4 className="fonts bold white">Work Interval Timer</h4>
              </div>
              <div className="container-work">
              <div>
                  <div>
                      <script>

                      </script>

                          <h2 className="fonts bold">{onBreak ? "BREAK TIME" : "WORK TIME"}</h2>
                          <h1 className="fonts bold timer" id="change">{minutes}:{seconds}</h1>
                  </div>
                  <a style={{textDecoration: "none"}} className="fonts question">{isRunning ? "" : onBreak ? "Ready to start working?" : "Ready to start your break?"}</a>
                  <div>
                    <button onClick={resume} className="work-button-2">CONTINUE</button>
                    <button onClick={pause} className="work-button-2">PAUSE</button>
                    <br/>
                    <a style={{textDecoration: "none"}} onClick={onBreak ? clickOnBreak : clickOnWork} className="fonts bold question2">{isRunning ? "" : onBreak ? "Click here to start working!" : "Click here to start our break!"}</a>
                  </div>

              </div>
              </div>
          </div>
    );
  }

  // component for work timer
  const WorkIntervals = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + (props.timer.workMin * 60) + (props.timer.workSec/1));
    return (
      <div>
        <Timer expiryTimestamp={time} />
      </div>
    );
  }

  // component for break timer
  const BreakIntervals = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + (props.timer.breakMin * 60) + (props.timer.breakSec/1));
    return (
      <div>
        <Timer expiryTimestamp={time} />
      </div>
    );
  };

  // uses onBreak state if true or false to switch in between pages
  return (
    <div>
      {onBreak ? <BreakIntervals /> : <WorkIntervals/> }
    </div>
  )

}

export default WorkOrBreak;