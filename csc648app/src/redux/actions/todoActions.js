import axios from 'axios'


const setTodoList = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {

        // call backend
        const res = await axios.get(`/api/todo/getTodoList`)
        console.log("THIS WORKED")
        console.log(res.data)

        // call the reducer
        dispatch({
            type: "SET_TODOLIST",
            payload: res.data
        })
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

export {setTodoList}