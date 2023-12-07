import { configureStore, } from "@reduxjs/toolkit";
import studentReducer from "../features/students/studentSlice";

export default configureStore({
    reducer: {
        student: studentReducer,
    },
});