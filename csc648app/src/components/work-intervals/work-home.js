import React, {useState} from 'react';
import { useTimer } from 'react-timer-hook';
import './work-intervals.css'
import WorkIntervals from './work-intervals';
import MyTimer from './work-test';
import WorkIntervals2 from './WorkTimer';
import WorkIntervals3 from './WorkTimer2';
// import Alarm from './work-alarm';


const Test = () => {


  const [test, setTest] = useState(false);
  const [timer, setTimer] = useState(0);

  const onChange = (e) => {
    setTimer(e);
    console.log(timer);
    console.log(e);
  }

  const onClick = () => {
    //   e.preventDefault();
    console.log("test")
    setTest(true);


  }

  return (
    <div>
        {test ? timer == 0 ? "loading" : <WorkIntervals3 timer={timer}/> : <WorkIntervals2 onClick={onClick} onChange={onChange}/>}
        {}
    </div>
  );
}

export default Test;