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

import UpcomingList from "./to-do-list/UpcomingList";

const TodoTemp = (props) => {
  // local states
  const [text, setText] = useState("");

  // this is used for todolist setting
  const [onFocus, setOnFocus] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");

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
      width: "30rem",
      height: "30rem",
    },
  };

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
  return (
    <div>
      {/* button that should be replaced by modal */}
      <Sidebar title={props.title} onClick={onClickList} />
      <button
        data-testid="openModal"
        style={{ width: "20rem", height: "5rem" }}
        onClick={() => setModalIsOpen(true)}
      >
        {" "}
        ADD TODOLIST{" "}
      </button>
      <Modal ariaHideApp={false} isOpen={modalState} style={customStyles}>
        <div style={{ justifyContent: "center" }}>
          <h3 style={{ textAlign: "center" }}>Todolist Name</h3>
          <input type="text" onChange={(e) => setText(e.target.value)} />
          <button onClick={onClick}>submit</button>

          <button
            style={{ marginTop: "5rem" }}
            onClick={() => setModalIsOpen(false)}
          >
            close modal
          </button>
        </div>
      </Modal>

      {/* this is rendering the todolists */}
      <div />

      {/* This is where u put upcoming and current */}

      {props.title.length != 0 ? (
        onFocus === undefined ? (
          <div style={{ paddingTop: "5em" }}>CHOOSE A TODOLIST</div>
        ) : (
          props.id
            .filter((id) => id == onFocus)
            .map((id) => <TodoList title={currentTitle} id={id} />)
        )
      ) : (
        "LOADING"
      )}

      <UpcomingList title={props.title} id={1000} task={props.todolist} />
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
