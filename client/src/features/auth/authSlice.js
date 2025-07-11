import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: null,
    isAuthenticated : false,
};

// Create slice
const authSlice   = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSucess: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload
        } ,
        logOut: (state) => {
            state.isAuthenticated = false;
            state.user = null
        }
    }
})

export const {loginSucess, logOut} = authSlice.actions

export default authSlice.reducer