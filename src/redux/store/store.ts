import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice"
import productsReducer from "../features/productsSlice"
import cartReducer from "../features/cartSlice"

export const store = configureStore({
    reducer: {
        app: appReducer,
        products: productsReducer,
        cart:cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch