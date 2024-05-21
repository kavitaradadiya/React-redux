import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";

const store = configureStore({
    reducer : {
        cart: counterSlice.reducer
    }
})

export default store;