import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import List from './List';
import {BsXLg} from 'react-icons/bs'


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

    // Displays the tasks with a checkbox and delete icon
    // return todos.map((todo, index) => (
        return (
            <>
            {/* style={{display:"flex",justifyContent:'space-between'}} */}
        <div className={!todos ? 'todo-row complete' : 'todo-row' }
         >
            <div className="title-and-delete" style={{display:"flex",justifyContent:'space-between'}}>
                
            <>{todos}

                </>
                <div onClick={onClick}><BsXLg/></div>
        </div>

            
            <div style={{color: "grey"}}>Due Date: {date}</div>
            {/* <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
            </div>

            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
            </div> */}
        </div>
        <p1></p1>
        </>
    )


}

export default Todo;