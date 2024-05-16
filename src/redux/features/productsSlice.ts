import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "../../types/types";


const initialState:ProductState[] = []

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: ( state, action: PayloadAction<ProductState[]>) => {
      return action.payload
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;

// 1 da imam objekat koji ima te propertije
// 2 da napravim funckiju setFilter koja prima payload
// destrukturujem {key,value} = action.payload
// i tu nesto setujem da se to apdejtuje nemam pojma

// 3. samo returnam setFilter


  // setFilters: (state, action: PayloadAction<boolean>) => {
    // //   state.loading = action.payload;
    // },