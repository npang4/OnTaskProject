import { combineReducers } from "redux"
import todoReducer from "./todoReducer"
import userReducer from '../../features/userSlice';
import loginReducer from "./loginReducer";

// root reducer 
export default combineReducers({
    todo: todoReducer,
    user: userReducer,
    login: loginReducer,
})

