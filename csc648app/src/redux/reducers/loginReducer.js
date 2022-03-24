const INITIAL_STATE = {
   email: "",
   loggedIn: false,
   attempt: false
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "login":
            console.log(action.payload)
            const newState = action.payload;
            const log = true;
            return {
                ...state, email: newState, loggedIn: log
            };
        case "false": 
            const logg = true;
            return{
                ...state, attempt: logg
            }
        default:
            return state;
    }
}

export default loginReducer