import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import loginReducer from "../redux/reducers/loginReducer";
import todoReducer from "../redux/reducers/todoReducer";

export default configureStore({
    reducer:{
        user: userReducer,
        todo: todoReducer,
        login: loginReducer,
    }
})
