import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type appState = {
  loading: boolean;
  error: boolean;
  isSidebarOpen: boolean;
  activePageIndex: number;
};

const initialState: appState = {
  loading: false,
  error: false,
  isSidebarOpen: false,
  activePageIndex: 0
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
    toggleisSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setActivePageIndex: (state, action:PayloadAction<number>) => {
      state.activePageIndex = action.payload
    }
  },
});

export const { setLoading, setError, toggleisSidebarOpen, setActivePageIndex } = appSlice.actions;
export default appSlice.reducer;
