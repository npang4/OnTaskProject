import axios from 'axios'



const setTask = (title/*, complete, _id, date,priority, todolistId*/) => async dispatch => {
    console.log("ACTION: ADDING TASK")
    console.log (title)
    try {

        // call backend     -> note that ?title=${title} means query parameters
        const res = await axios.get(`/api/addTask?title=${title}`)
        console.log("THIS WORKED")
        console.log(res.data)

        
        console.log(res.data)
        if(res.data){
            const res = await axios.get(`/api/todo/getTodoList`)
            console.log("THIS WORKED")
            console.log(res.data)

            // call the reducer
            dispatch({
                type: "SET_TODOLIST",
                payload: res.data
            })
            
        }
        else{
            dispatch({
                type: "false"
            })
        }
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

const deleteTask = () => async dispatch => {
    console.log("ACTION: RESETTING TO DEFAULT LIST")
    try {
        //CALL Backend when we want to delete task by title
        const res = await axios.get(`/api/deleteTask?title=${title}`)
        console.log("THIS WORKED")
        console.log(res.data)

        console.log(res.data)
        if(res.data){
            dispatch({
                // I changed delete deleteid to DeleteTitle since we are going to delete task by title
                // also, please check taskReducer.js
                type: 'deleteTitle',
                payload: res.data
            })
        }
        else{
            dispatch({
                type: "false"
            })
        }
    }
    catch (e) {
        console.log("THERE WAS AN ERROR")
        console.log(e)
    }
}

export {setTask}
export {deleteTask}