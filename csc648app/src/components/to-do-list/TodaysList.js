import React, { useEffect, useState } from "react";
import { RiContactsBookLine } from "react-icons/ri";
import { connect } from "react-redux";
import { setTodoList } from "../../redux/actions/todoActions";
import Collab from "../collab/Collab.js";
import greenAddIcon from "./greenAddIcon.png";
import List from "./List";
import Todo from "./Todo";
import './todolist.css';
import { deleteTask } from "../../redux/actions/taskActions";
import { useDispatch } from "react-redux";

const TodaysList = (props) => {
  const dispatch = useDispatch();

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
  const [showButton, setShowButton] = useState(false);
  const addClicked = () => {
    if (showForm) {
      setShowForm(false);
      setShowButton(false);
    } else {setShowForm(true);
      setShowButton(true);}
  };
  const closebtn =()=>{

      setShowForm(false);
      setShowButton(false);

  }

  const onClick = (e) => {
    console.log("CLICK: REMOVE");
    console.log("E: " + e);
    dispatch(deleteTask(e));
  };

  console.log(showForm);

  return (
    <div >
      {/* collaborative */}
    {/* Today bar = show today's date */}
      <div style={{background: "#7adfb5",height: "50px",width: "45%",margin:"auto"}}>
        <div style={{width: "200px",}}>
          <h1 style={{fontSize: "120%", fontWeight: "bolder", textAlign:"left", marginLeft: "10px"}}>Today's List</h1>    
        </div>  
      </div>
      <br/>
      <input type="text" placeholder="Search Tasks" style={{ width: "400px" }} onChange={(event) => {
          event.preventDefault();
          setSearch(event.target.value);
        }}
      />
        
        <br/>
      

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
            .map((task) => <Todo todos={task.title} key={task._id} date={task.date} id={task._id} onClickParent={onClick}                 complete={task.complete}
            />)
        : props.todolist
            .filter(
              (todo) =>
                todo.date.includes(year) &&
                todo.date.includes(day) &&
                todo.date.includes(month) &&
                todo.date.includes(weekday)
            )
            .map((task) => <Todo todos={task.title} date={task.date} id={task._id} onClickParent={onClick}                 complete={task.complete}
            />)}


            
      <button onClick={addClicked} className="add-task-btn1" style={{marginRight:"20%"}}>
        <img src={greenAddIcon} />
        Add Task
      </button>

      {showForm ? <List id={props.id} close={closebtn} /> : null}
      {showButton?
      <button onClick={closebtn} className="close" style={{background:"rgba(198, 193, 193, 0.868)",
       border:"none",marginLeft:"36%",width:"107px"}}>
      
        Cancel
      </button> : null}

      
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
