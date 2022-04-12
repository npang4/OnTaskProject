import React,{useState} from 'react'
import TodoList from './to-do-list/TodoList'
import Todo from './to-do-list/Todo';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { setTodoList,setTodoId, setTodoTitle } from "../redux/actions/todoActions";
import { addTodolist } from '../redux/actions/todoActions';
import { Button } from 'bootstrap';
import Modal from "react-modal"



const TodoTemp = (props) => {

    // local states
    const [text,setText] = useState("")
    const [modalState,setModalIsOpen] = useState(false)
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
        props.addTodolist(text);
        setModalIsOpen(false)
    }

    const customStyles = {
        content: {
          width:'30rem',
          height:'30rem',
          
        },
      };
  return (
    <div>
        {/* button that should be replaced by modal */}
        <button style={{width:'20rem', height:'5rem'}} onClick={()=>setModalIsOpen(true)}> ADD TODOLIST </button>
        <Modal isOpen={modalState} style={customStyles} >
            <div style={{justifyContent:'center'}}>
                <h3 style={{textAlign:'center'}}>
                Todolist Name
            </h3>
            <input type="text" onChange={(e)=> setText(e.target.value)}/>
            <button onClick={onClick}>submit</button>

            <button style={{marginTop:"5rem"}}onClick={()=> setModalIsOpen(false)}>close modal</button>
            </div>
            
        </Modal>

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
      addTodolist: (text) => dispatch(addTodolist(text))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(TodoTemp);