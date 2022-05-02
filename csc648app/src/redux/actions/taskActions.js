import axios from "axios";
import { setTodoList } from "./todoActions";
const addTask =
  (title, todolistId, date /*, complete, _id ,priority, todolistId*/) =>
  async (dispatch) => {
    console.log("ACTION: ADDING TASK");
    console.log(title);
    console.log(todolistId);
    console.log(date);
    try {
      // call backend     -> note that ?title=${title} means query parameters
      const res = await axios.post(
        `/api/addTask?title=${title}&todolistId=${todolistId}&date=${date}`
      );
      console.log("THIS WORKED");
      console.log(res.data);
      await dispatch(setTodoList());
    } catch (e) {
      console.log("THERE WAS AN ERROR");
      console.log(e);
    }
  };

const deleteTask = (title) => async (dispatch) => {
  console.log("ACTION: RESETTING TO DEFAULT LIST");
  try {
    //CALL Backend when we want to delete task by title
    const res = await axios.get(`/api/deleteTask?title=${title}`);
    console.log("THIS WORKED");
    console.log(res.data);

    console.log(res.data);
    if (res.data) {
      dispatch({
        // I changed delete deleteid to DeleteTitle since we are going to delete task by title
        // also, please check taskReducer.js
        type: "deleteTitle",
        payload: res.data,
      });
    } else {
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
