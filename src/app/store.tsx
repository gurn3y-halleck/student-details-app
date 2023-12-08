import { configureStore, } from "@reduxjs/toolkit";
import studentReducer from "../features/students/studentSlice";
import authenReducer from "../features/students/authenticationSlice";

export default configureStore({
    reducer: {
        authen:  authenReducer,
        student: studentReducer,
    },
});