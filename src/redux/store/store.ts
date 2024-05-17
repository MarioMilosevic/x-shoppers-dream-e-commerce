import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice"
import productsReducer from "../features/productsSlice"

export const store = configureStore({
    reducer: {
        app: appReducer,
        products: productsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch