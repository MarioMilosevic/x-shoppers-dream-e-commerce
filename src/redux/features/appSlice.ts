import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type appState = {
  loading: boolean;
  error: boolean;
  isSidebarOpen: boolean;
};

const initialState: appState = {
  loading: false,
  error: false,
  isSidebarOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    // console.log
    toggleisSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setLoading, setError, toggleisSidebarOpen } = appSlice.actions;
export default appSlice.reducer;
