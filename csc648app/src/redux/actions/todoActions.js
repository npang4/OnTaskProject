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
        // res.data.forEach(task => {
        //     dispatch({
        //         type: "SET_TODOLIST",
        //         payload: task
        //     })
        // })
     

        // // call the reducer
        // dispatch({
        //     type: "SET_TODOLIST",
        //     payload: res.data
        // })
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

export {setTodoList}