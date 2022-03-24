const INITIAL_STATE = {
    //_id:0,
    title: '',
    /*complete: false,
    todolistId:0,
    date:0,
    priority:0*/
}

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "add":
            console.log(action.payload)
            const newState =action.payload;
            return {
                ...state, title: newState
            };
        case "deleteid": 
        newState = action.payload;
        return{
            ...state, items: newState
        }
        case "false": 
        const logg = true;
        return{
           ...state, attempt: logg
        }
        default:
            return state;
    
        }
}

export default taskReducer