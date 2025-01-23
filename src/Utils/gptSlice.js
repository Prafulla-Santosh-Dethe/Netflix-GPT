import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSerach:false
    },

    reducers:{
        toggleGptSerachView:(state,action)=>{
             state.showGptSerach = !state.showGptSerach  
        }
    }
});
export const {toggleGptSerachView} = gptSlice.actions;
export default gptSlice.reducer;