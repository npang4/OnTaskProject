import React, { useState } from "react";
import TodoList from "./to-do-list/TodoList";
import Todo from "./to-do-list/Todo";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  setTodoList,
  setTodoId,
  setTodoTitle,
} from "../redux/actions/todoActions";
import { addTodolist } from "../redux/actions/todoActions";
import { Button } from "bootstrap";
import Modal from "react-modal";

import Sidebar from "./navbar/Sidebar";

import TodaysList from "./to-do-list/TodaysList";
import UpcomingList from "./to-do-list/UpcomingList";
import WorkIntervals from "./work-intervals/work-intervals";
import SetTimers from "./work-intervals/SetTimers";

const TodoTemp = (props) => {
  // local states
  const [text, setText] = useState("");

  // this is used for todolist setting
  const [onFocus, setOnFocus] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentDate, setCurrentDate] = useState("no due");

  const [modalState, setModalIsOpen] = useState(false);
  // setting all the default things
  useEffect(() => {
    if (process.env.NODE_ENV !== "test") Modal.setAppElement("#root");

    var appElement = document.getElementById("app");
    Modal.setAppElement(appElement);

    if (props.todolist.length === 0) {
      console.log("GETTING TASKS");
      props.defaultTasks();
      props.defaultId();
      props.defaultTitle();

      setOnFocus(props.id[0]);
      props.title.forEach((todolist) => {
        if (todolist.id == props.id[0]) {
          console.log("Title CHECK " + todolist.title);
          setCurrentTitle(todolist.title);
        }
      });
    }
  }, []);

  // when the button is clicked, this is fired to add a new todolist (connect this to ur modal?)
  const onClick = (e) => {
    e.preventDefault();
    props.addTodolist(text);
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
      width:'30rem',
      height:'20rem',
      margin: 'auto',
      
    },
};

const modalInput = {
  // marginTop: "60px",
  width: "70%",
  marginLeft: "70px",
  height: "30px"

  
};

const submitButton = {
  marginTop: "30px",
  backgroundColor: "#6ccfa5",
  borderStyle: "none",
  color: "white",
  display: "flex",
  width: "50%",
  height: "40px",
  borderRadius: "10px",
  marginLeft: "auto",
  marginRight: "auto",
  textAlign: "center",
  justifyContent: "center",
  paddingTop: "7px",
  fontWeight: "bold"
}

  const modalInput = {
    // marginTop: "60px",
    width: "70%",
    marginLeft: "70px",
    height: "30px"


  };

  const submitButton = {
    marginTop: "30px",
    backgroundColor: "#6ccfa5",
    borderStyle: "none",
    color: "white",
    display: "flex",
    width: "50%",
    height: "40px",
    borderRadius: "10px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: "7px",
    fontWeight: "bold"
  }

  // this sets what todolist is currently displayed
  const onClickList = (e) => {
    console.log("TODOTEMP: CLICK");
    console.log(e);
    props.title.forEach((todolist) => {
      if (todolist.title == e) {
        console.log("ID CHECK " + todolist.id);
        setOnFocus(todolist.id);
        setCurrentTitle(e);
      }
    });
  };

  const onClickUp = () => {
    setOnFocus(333);
  }
  const onClickToday = () => {
    setOnFocus(444);
  }

  const onClickWork = () => {
    setOnFocus(555);
  }
  return (
    <div >
      {/* button that should be replaced by modal */}

      <Sidebar title={props.title} onClick={onClickList} addTodo={() => setModalIsOpen(true)} onClickUp={onClickUp} onClickToday={onClickToday} onClickWork={onClickWork} />

      {/* <button
        data-testid="openModal"
        style={{ width: "10rem", height: "5rem" }}
        onClick={() => setModalIsOpen(true)}
      >
        {" "}
        ADD TODOLIST{" "}
      </button> */}
      <Modal ariaHideApp={false} isOpen={modalState} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
            <div style={{justifyContent:'center'}}>
                <h3 style={{textAlign:'center', fontWeight: 'bold', marginTop: '30px'}}>Add a to-do list</h3>
                <div style={{textAlign: 'left', marginTop: '50px', marginLeft: '70px', fontWeight:'bold'}}>Name of List:</div>
                <input style={modalInput} type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
                <br/>
                <button style={submitButton} onClick={onClick}>SUBMIT</button>
            {/* <button style={{marginTop:"5rem"}}onClick={()=> setModalIsOpen(false)}>close modal</button> */}
            </div>
      </Modal>

      {/* this is rendering the todolists */}
      <div />

      {/* This is where u put upcoming and current */}
      <div style={{ paddingTop: '5em' }}>
        {props.title.length != 0 ? (
          onFocus === undefined || onFocus == 444 ?
            <TodaysList title={props.title} id={1000} task={props.todolist} />
            : onFocus == 333 ?
              <UpcomingList title={props.title} id={1001} task={props.todolist} />
              : onFocus == 555 ?
                <SetTimers />
                :
                (
                  props.id
                    .filter((id) => id == onFocus)
                    .map((id) => <TodoList title={currentTitle} id={id} daet={currentDate} />)
                )
        ) : (
          "LOADING"
        )}
      </div>


      {/* <TodaysList title={props.title} id={1000} task={props.todolist} />
      <UpcomingList title={props.title} id={1001} task={props.todolist} /> */}
    </div>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return {
    todolist: state.todo.items,
    id: state.todo.todoId,
    title: state.todo.todoTitle,
  };
};

// matching dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    defaultTasks: () => dispatch(setTodoList()),
    defaultId: () => dispatch(setTodoId()),
    defaultTitle: () => dispatch(setTodoTitle()),
    addTodolist: (text) => dispatch(addTodolist(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoTemp);
