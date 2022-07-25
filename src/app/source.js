import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../feautures/authentication/auth0'

const store = configureStore({
    reducer: {
        loginDetails:authReducer
    }
})

export default store;