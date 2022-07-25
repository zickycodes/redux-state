import { useAuth0 } from "@auth0/auth0-react";
import { createSlice } from "@reduxjs/toolkit";


const {isAuthenticated} = useAuth0

const initialState = {
    login: false,
    logout: true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authenticated: (state) => {
            if(isAuthenticated) {
              state.login = true
              state.logout= false
            } else {
                state.login = false
                state.logout = true
            }
        }
    }
})
const {actions, reducer} = authSlice
export const {authenticated} = actions
export default reducer;
