import React, { useEffect, useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { connect } from "react-redux";
import { setTodoList } from "../../redux/actions/todoActions";
import Collab from "../collab/Collab.js";
import greenAddIcon from "./greenAddIcon.png";
import List from "./List";
import Todo from "./Todo";

const UpcomingList = (props) => {
  var options = {
    month: "short",
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const today = new Date();
  const year = tomorrow.getFullYear();
  const month = tomorrow.toLocaleString("default", { month: "short" });
  const day = tomorrow.getDate();
  const dayR = day + " 2";
  console.log("hello world" + tomorrow);
  console.log(month);
  console.log(year);
  console.log(day);
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
    if (props.id == 1001) {
      setTitleOfList("Upcoming List");
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
                todo.date.includes(dayR) &&
                todo.date.includes(month)
            )
            .filter((todo) => todo.title.includes(search))
            .map((task) => (
              <Todo todos={task.title} key={task._id} date={task.date} />
            ))
        : props.todolist
            .filter(
              (todo) =>
                todo.date.includes(year) &&
                todo.date.includes(dayR) &&
                todo.date.includes(month)
            )
            .map((task) => <Todo todos={task.title} date={task.date} />)}
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
