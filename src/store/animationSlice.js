import { createSlice } from "@reduxjs/toolkit";


const animationSlice = createSlice({
    name: "animation",
    initialState: {
        completed: false
    },
    reducers: {
        toggleAnimation: (state) => {
            state.completed = true;
        }
    }
});


export const { toggleAnimation } = animationSlice.actions; 
export default animationSlice.reducer;