import quoteReducer from "./quoteReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        quotes: quoteReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;