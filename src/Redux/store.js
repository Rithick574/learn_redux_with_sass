import { configureStore } from "@reduxjs/toolkit";
import colorReducer from './Color/ColorSlice'
import CountReducer from './Count/CountSlice'

export default configureStore({
    reducer:{
        color:colorReducer,
        count:CountReducer
    }
})