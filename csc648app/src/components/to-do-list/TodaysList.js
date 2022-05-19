import React, { useEffect, useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { connect } from "react-redux";
import { setTodoList } from "../../redux/actions/todoActions";
import Collab from "../collab/Collab.js";
import greenAddIcon from "./greenAddIcon.png";
import List from "./List";
import Todo from "./Todo";

const TodaysList = (props) => {
  var options = {
    month: "short",
    weekday: "long",
  };
  const today = new Date();
  const year = today.getFullYear();
  const month = today.toLocaleString("default", { month: "short" });
  const weekday = today.toLocaleString("default", { weekday: "short" });
  const day = today.getDate();
  console.log("hello world");
  console.log(month);
  console.log(year);
  console.log(day);
  console.log(weekday);
  const [todos, setTodos] = useState([]);

  // this is for the search for local state!
  const [search, setSearch] = useState([]);

  // this is the title of the list
  const [titleOfList, setTitleOfList] = useState("");

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
    if (props.id == 1000) {
      setTitleOfList("Today's List");
    }
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
      {/* {console.log(
        array.filter(
          (todo) =>
            todo.date.includes(year) &&
            todo.date.includes(day) &&
            todo.date.includes(month)
        )
      )} */}
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
            .filter(
              (todo) =>
                todo.date.includes(year) &&
                todo.date.includes(day) &&
                todo.date.includes(month) &&
                todo.date.includes(weekday)
            )
            .filter((todo) => todo.title.includes(search))
            .map((task) => (
              <Todo todos={task.title} key={task._id} date={task.date} />
            ))
        : props.todolist
            .filter(
              (todo) =>
                todo.date.includes(year) &&
                todo.date.includes(day) &&
                todo.date.includes(month) &&
                todo.date.includes(weekday)
            )
            .map((task) => <Todo todos={task.title} date={task.date} />)}
      <div>
        <button onClick={addClicked} className="add-task-btn1">
          <img src={greenAddIcon} />
          Add Task
        </button>
      </div>
      {showForm ? <List id={props.id} /> : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(TodaysList);
