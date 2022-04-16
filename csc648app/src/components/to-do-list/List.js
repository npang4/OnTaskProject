import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./List.css";
import { addTask } from "../../redux/actions/taskActions";
const List = (props) => {
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
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      ></input>
      <button className="todo-btn">Add task</button>
    </form>
  );
};

export default List;
