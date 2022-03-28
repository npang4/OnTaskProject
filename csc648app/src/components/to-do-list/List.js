import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import './List.css';

const List = (props) => {

    // Returns a reference to dispatch function from Redux

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Adding a task results in an id between 1 - 10000
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('')

    };

    return (

        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a task" value={input} name="text" className="todo-input" onChange={handleChange} ref={inputRef}></input>
            <button className="todo-btn">Add task</button>
        </form>

    )
}

export default List;