import React, {useState} from 'react';
import './work-intervals.css'
import SetTimers from './SetTimers';
import WorkOrBreak from './WorkOrBreakTimers';


const WorkSwitch = () => {
  const [test, setTest] = useState(false);
  const [timer, setTimer] = useState(0);
  const [onWork, setonWork] = useState(true)

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
        {test ? timer == 0 ? "loading" : <WorkOrBreak timer={timer} /> : <SetTimers onClick={onClick} onChange={onChange}/>}
    </div>
  );
}

export default WorkSwitch;