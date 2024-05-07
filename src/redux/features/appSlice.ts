import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


export type appState = {
    loading: boolean;
}

const initialState:appState = {
    loading:false
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        }
    }
})

export const { setLoading } = appSlice.actions
export default appSlice.reducer