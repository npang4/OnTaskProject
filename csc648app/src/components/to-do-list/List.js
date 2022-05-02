import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./List.css";
import { addTask } from "../../redux/actions/taskActions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const List = (props) => {
  //usestate for calendar
  const [selectedDate, setSelectedDate] = useState(null);
  // Returns a reference to dispatch function from Redux
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(input, props.id));
    console.log(props.id);
    console.log(props.selectedDate);
    setInput("");
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task"
          value={input}
          name="text"
          id="input"
          className="todo-input"
          onChange={handleChange}
          ref={inputRef}
        ></input>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="yyyy/MM/dd hh:mm:ss"
          placeholderText="Due Date"
          timeIntervals={5}
          format
        />
        <button id="submit" className="todo-btn">
          Add task
        </button>
      </form>
    </div>
  );
};

export default List;
