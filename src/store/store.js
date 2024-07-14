import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice.js";
import userSlice from "./userSlice.js";



const store = configureStore({
    reducer: {
        info : infoSlice,
        user : userSlice,
    },
});




export default store