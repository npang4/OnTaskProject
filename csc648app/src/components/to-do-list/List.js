import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./List.css";
import { addTask } from "../../redux/actions/taskActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import greenAddIcon from "./greenAddIcon.png";
import { AiOutlineClockCircle } from "react-icons/ai";

const List = (props) => {
  const clockion = (<AiOutlineClockCircle />);
  //usestate for calendar
  const [selectedDate, setSelectedDate] = useState(null);
  // Returns a reference to dispatch function from Redux
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  //kim
  const [Des, setDes] = useState("");

  const inputRef = useRef(null);
 
 //kim
  const DesRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    DesRef.current.focus();
  },[]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const DescptionChange = (e) => {
    setDes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(input, props.id, selectedDate));
    console.log(props.id);
    console.log(selectedDate);
    setInput("");
  };
  const DesSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(Des, props.id, selectedDate));
    console.log(props.id);
    console.log(selectedDate);
    setDes("");
  };

  function dateOnChange(date) {
    setSelectedDate(date);
    console.log(date);
  }


  return (
    <div>
      <form autocomplete="off" className="todo-form" onSubmit={handleSubmit}>   
        <div className="subject-form">
          Subject: 
        <input
        style={{border: 'none', marginLeft:"10px",width:"90%"}}
          type="text"
          placeholder="  "
          value={input}
          name="text"
          id="input"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        ></input>
        </div>


        <div className="Description-form">
          Description: 
        <input
        style={{border:'none', marginLeft:"10px" ,width:"86%"}}
          type="text"
          placeholder="  "
          value={Des}
          name="text"
          id="input"
          className="todo-input"
          onChange={DescptionChange}
           ref={DesRef}
        ></input>
        </div>

          <div className="date-picker-container" style={{marginRight:"70%"}}>
          <DatePicker
         selected={selectedDate}
         onChange={dateOnChange}
         style= {{background: "none"}}
         showTimeSelect
         dateFormat="yyyy/MM/dd hh:mm:ss"
         placeholderText="  Due Date"
         timeIntervals={5}
         format  
        customInput= {<p1 style={{fontSize: "15px", 
        border: "solid 2px black", width:"150px",
        height:"50px",textAlign:"left"}}>
          <AiOutlineClockCircle/> Due Date</p1>}
       />

        </div>

        <button id="submit" className="todo-btn"  >
          Add task
        </button>
      </form>

    </div>
  );
};

export default List;
