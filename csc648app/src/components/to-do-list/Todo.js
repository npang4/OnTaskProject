import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import List from './List';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {

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

    // Displays the tasks with a checkbox and delete icon
    // return todos.map((todo, index) => (
        return (
        <div className={!todos ? 'todo-row complete' : 'todo-row'}>
            { todos}
            
            {/* <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.title}
            </div>

            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
            </div> */}
        </div>
    )


}

export default Todo;