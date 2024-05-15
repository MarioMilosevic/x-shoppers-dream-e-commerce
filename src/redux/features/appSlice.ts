import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../../types/types";

export type appState = {
  loading: boolean;
  products: ProductState[];
};

const initialState: appState = {
  loading: false,
  products: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setProducts: (state, action: PayloadAction<ProductState[]>) => {
      console.log(action.payload)
      state.products = action.payload;
    },
  },
});

export const { setLoading, setProducts } = appSlice.actions;
export default appSlice.reducer;
