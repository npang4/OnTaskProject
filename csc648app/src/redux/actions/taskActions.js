import axios from "axios";

import { setTodoList,setTodoId, setTodoTitle } from "./todoActions"
const addTask =
  (title, todolistId /*, complete, _id, date,priority, todolistId*/) =>
  async (dispatch) => {
    console.log("ACTION: ADDING TASK");
    console.log(title);
    console.log(todolistId);
    try {
      // call backend     -> note that ?title=${title} means query parameters
      const res = await axios.post(
        `/api/addTask?title=${title}&todolistId=${todolistId}`
      );
      console.log("THIS WORKED");
      console.log(res.data);
      await dispatch(setTodoList());
    } catch (e) {
      console.log("THERE WAS AN ERROR");
      console.log(e);
    }
  };

const deleteTask = (id) => async (dispatch) => {
  console.log("ACTION: deleteTask");
  try {
    //CALL Backend when we want to delete task by id
    const res = await axios.get(`/api/deleteTask?id=${id}`);
    console.log(res.data);
    if (res.data) {
      console.log("SUCCESSFUL DELETE")
      // recall all of these 
      // await dispatch(setTodoTitle());
      // await dispatch(setTodoId());
      await dispatch(setTodoList());

    } else {
      console.log("INSUCCESSFUL")
      dispatch({
        type: "false",
      });
    }
  } catch (e) {
    console.log("THERE WAS AN ERROR");
    console.log(e);
  }
};

export { addTask };
export { deleteTask };
