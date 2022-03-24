const INITIAL_STATE = {
    items: []
}

const todoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "SET_TODOLIST":
            console.log(action.payload)
            const newState = action.payload;
            return {
                ...state, items: newState
            };
        default:
            return state;
    }
}

export default todoReducer