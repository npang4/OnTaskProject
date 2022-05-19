const INITIAL_STATE = {
   email: "",
   loggedIn: false,
   attempt: false
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "login":
            console.log("LOGIN_REDUCER: TRUE")
            const newState = action.payload;
            const log = true;
            return {
                ...state, email: newState, loggedIn: log
            };
        case "false": 
            console.log("LOGIN_REDUCER: FALSE")
            const logg = true;
            return{
                ...state, attempt: logg
            }
        case "LOG_OUT":
            
            // This is called to set loggedIn to false (making the user log out)
            console.log("REDUCER: LOGGIN OUT")
            const logOut = false;
            return {
                ...state, loggedIn: logOut, email: ""
            }    
        default:
            return state;
    }
}

export default loginReducer