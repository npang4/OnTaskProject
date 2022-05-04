import axios from 'axios'


const setTodoList = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.get(`/api/getAllTasks`)

        console.log("SET_TODO_LIST ACTION: " + res.data);
        
        // call the reducer to set the todolist
        dispatch({
            type: "SET_TODOLIST",
            payload: Array.from(res.data)
        })
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

// get the ids that belong to the user
const setTodoId = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.get(`/api/getUserTodo`)

        console.log("SET_TODOID ACTION: " + res.data);
        
        // call the reducer to set the todolist
        dispatch({
            type: "SET_TODOID",
            payload: Array.from(res.data)
        })
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

// get the todolist titles that belong to the user
const setTodoTitle = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.get(`/api/getTodoTitle`)

        console.log("SET_TODOTITLE ACTION: " + res.data);
        
        // call the reducer to set the todolist
        dispatch({
            type: "SET_TODOTITLE",
            payload: Array.from(res.data)
        })
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

// add a new todolist
const addTodolist = (text) => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.post(`/api/addTodolist?title=${text}`)
        console.log("TEXT: " + text)
        console.log("ADD TODO ACTION: " + res.data);
        
        // recall all of these 
        await dispatch(setTodoTitle());
        await dispatch(setTodoId());
        await dispatch(setTodoList());

    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}


export {setTodoList,setTodoId,setTodoTitle,addTodolist}