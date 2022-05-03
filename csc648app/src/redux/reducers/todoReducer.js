const INITIAL_STATE = {
    items: [],
    todoId: [],
    todoTitle: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_TODOLIST":
            console.log("TODOLIST REDUCER: " + action.payload)
            const newState = action.payload;
            console.log(newState);
            return {
                ...state, items: newState
            };
        case "SET_TODOID":
            console.log("TODOID Reducer: " + action.payload)
            const newState2 = action.payload;
            return {
                ...state, todoId: newState2
            };    
        case "SET_TODOTITLE":
            console.log("TODOID Reducer: " + action.payload)
            const newState3 = action.payload;
            return {
                ...state, todoTitle: newState3
            };     
        default:
            return state;
    }
}

export default todoReducer