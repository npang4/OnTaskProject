import React from 'react'
import TodoList from './to-do-list/TodoList'
import Todo from './to-do-list/Todo';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { setTodoList,setTodoId, setTodoTitle } from "../redux/actions/todoActions";
import { addTodolist } from '../redux/actions/todoActions';
import { Button } from 'bootstrap';



const TodoTemp = (props) => {

    // setting all the default things
    useEffect(() => {
        if (props.todolist.length === 0) {
          console.log("GETTING TASKS");
          props.defaultTasks();
          props.defaultId();
          props.defaultTitle();
        }
      }, []);    
    

      // when the button is clicked, this is fired to add a new todolist (connect this to ur modal?)
    const onClick = (e) => {
        e.preventDefault();
        props.addTodolist();
        
    }
  return (
    <div>
        {/* button that should be replaced by modal */}
        <button style={{width:300,height:30}} onClick={onClick}>add todolist</button>

         {/* this is rendering the todolists */}
        {props.title.length != 0 ? props.id.map((id) => <TodoList title={props.title} id={id} />) : "LOADING" }
    </div>
  )
}

// mapping state to props
const mapStateToProps = (state) => {
    return { todolist: state.todo.items, id: state.todo.todoId, title: state.todo.todoTitle };
  };
  
  // matching dispatch to props
  const mapDispatchToProps = (dispatch) => {
    return {
      defaultTasks: () => dispatch(setTodoList()),
      defaultId: () => dispatch(setTodoId()),
      defaultTitle: () => dispatch(setTodoTitle()),
      addTodolist: () => dispatch(addTodolist())
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoTemp);