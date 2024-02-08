import { createSlice } from "@reduxjs/toolkit";

export const CountSlice = createSlice({
    name:"count",
    initialState:{
        value:5
    },
    reducers:{
        increaseCount: (state)=>{
            state.value += 1
        },
        decreaseCount:(state)=>{
            state.value -= 1
        }
    }
})

export const {increaseCount,decreaseCount} = CountSlice.actions

export default CountSlice.reducer