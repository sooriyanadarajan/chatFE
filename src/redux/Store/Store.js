import { configureStore } from "@reduxjs/toolkit";
import getStageMasterReducer from "../Reducer/Reducer"
export const store=configureStore({
    reducer:{
            getStageMaster:getStageMasterReducer
    }
});