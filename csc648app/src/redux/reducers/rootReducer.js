import { combineReducers } from "redux"
import todoReducer from "./todoReducer"
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer"

// root reducer 
export default combineReducers({
    todo: todoReducer,
    login: loginReducer,
    task: taskReducer
})

