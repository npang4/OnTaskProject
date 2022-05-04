import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setTodoList } from "../../redux/actions/todoActions";
import Collab from "../collab/Collab.js";
import greenAddIcon from "./greenAddIcon.png";
import List from "./List";
import Todo from "./Todo";

const UpcomingList = (props) => {
  const [todos, setTodos] = useState([]);

  // this is for the search for local state!
  const [search, setSearch] = useState([]);

  // this is the title of the list
  const [titleOfList, setTitleOfList] = useState("");

  // Function to add a task
  {
    /*const addTodo = (todo) => {
    console.log("CHICKED");
    // Allows user to continue entering text if enter key is pressed in add task field
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    console.log("CHICKED");
    const obj = {
      title: todo.text,
      index: 0,
    };
    const newTodos = [obj, ...todos];

    setTodos(newTodos);
  };*/
  }

  // Function to complete to task after clicking on it.
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Removes the task and sets the id to null
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  // on page load
  useEffect(() => {
    // this is setting the title
    props.title.forEach((titleCard) => {
      if (props.id == titleCard.id) {
        setTitleOfList(titleCard.title);
      }
      if (props.id == 1000) {
        setTitleOfList("Upcoming List");
      }
    });
  }, []);

  const [showForm, setShowForm] = useState(false);
  const addClicked = () => {
    if (showForm) {
      setShowForm(false);
    } else setShowForm(true);
  };
  console.log(showForm);

  return (
    <div>
      {/* collaborative */}

      

      <h1> {titleOfList}</h1>

      {/* search bar that sets search *local state* */}
      <input
        type="text"
        placeholder="Search"
        style={{ width: "300px" }}
        onChange={(event) => {
          event.preventDefault();
          setSearch(event.target.value);
        }}
      />

      {/* <List onSubmit={addTodo} /> */}

      {/* if the todolist is null, show loading to prevent mapping through a null       */}
      {/* filter through the search options */}
      {props.todolist == null
        ? "LOADING"
        : search
        ? props.todolist
            .filter((todo) => todo.date == props.date)
            .filter((todo) => todo.title.includes(search))
            .map((task) => <Todo todos={task.title} key={task._id} />)
        : props.todolist
            .filter((todo) => todo.todolistId == props.id)
            .map((task) => <Todo todos={task.title} />)}
      {/* <button onClick={addClicked} className="add-task-btn1">
        <img src={greenAddIcon} />
        Add Task
      </button>
      {showForm ? <List id={props.id} /> : null} */}
    </div>
  );
};

// mapping state to props
const mapStateToProps = (state) => {
  return { todolist: state.todo.items };
};

// matching dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    defaultTasks: () => dispatch(setTodoList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingList);
