import { createSlice } from "@reduxjs/toolkit";

// Function to accept an initial state for our login and logout states
export const userSlice = createSlice({
    name:'user',
    initialState:{
        user: null,
    },
    // Login takes state and action when logged in
    reducers:{
        login: (state, action) => {
            state.user = action.payload;
        },
        // Sets user to null when logged out
        logout: (state) => {
            state.user = null;
        }
    }
});

export const {login, logout} = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;