import axios from 'axios'



const setTask = (title/*, complete, _id, date,priority, todolistId*/) => async dispatch => {
    console.log("ACTION: ADDING TASK")
    console.log (title)
    try {

        // call backend
        const res = await axios.get(`/api/getTasks/add?title=${title}`)
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

        const res = await axios.get(`/api/getTask/delete/:_id`)
        console.log("THIS WORKED")
        console.log(res.data)

        console.log(res.data)
        if(res.data){
            dispatch({
                type: 'deleteid',
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