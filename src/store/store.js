import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "./infoSlice.js";
import userSlice from "./userSlice.js";
import animationSlice from "./animationSlice.js"


const store = configureStore({
    reducer: {
        info : infoSlice,
        user : userSlice,
        Animation : animationSlice
    },
});




export default store