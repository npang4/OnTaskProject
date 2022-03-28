import { combineReducers } from "redux"
import todoReducer from "./todoReducer"
import loginReducer from "./loginReducer";

// root reducer 
export default combineReducers({
    todo: todoReducer,
    login: loginReducer,
})

