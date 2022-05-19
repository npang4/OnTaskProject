import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import List from './List';
import {BsXLg} from 'react-icons/bs'
import './todolist.css'


const Todo = ({ todos, completeTodo, removeTodo, updateTodo,onClickParent,id,date }) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    // sets task id to null if removed from to do list
    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <List edit={edit} onSubmit={submitUpdate} />
    }

    const onClick = (e) => {
        console.log(id)
        onClickParent(id)
    }

    const markComplete = () => {
        const completedTask = document.getElementById(id);
        const completedTime = document.getElementById(id);
        const checkbox = document.getElementById("checkbox");
        console.log(id)

        if (checkbox.checked) {
            completedTask.style.textDecoration="line-through";
            completedTime.style.textDecoration="line-through";
        }

        if (!checkbox.checked) {
            completedTask.style.textDecoration="none";
            completedTime.style.textDecoration="none";
        }

    }

    // Displays the tasks with a checkbox and delete icon
    // return todos.map((todo, index) => (
        return (
            <div>
                <div className={'todo-row'} style={{display:'flex',justifyContent:'space-between'}}>
                    <div className={'column-checkbox'}><input name="checkbox" id="checkbox" type="checkbox" className="checkbox" onClick={markComplete}/></div>
                    <div className={'column-3 clear title-size'}> 
                        <div style={{display: "block", alignContent: "left", textAlign: "left"}}>
                            <ul htmlFor="checkbox" id={id} style={{paddingBottom: "-1px"}}>{todos}</ul>
                            <ul htmlFor="checkbox" id={id} style={{color: "grey",fontSize:"14px",textAlign:"left", marginTop: "-5px"}}>Due Date: {date}</ul>
                        </div>
                    </div>
                    <br/>

                    <div className={'column-x'} onClick={onClick}><BsXLg/></div>

                </div>
                
            </div>
    )


}

export default Todo;