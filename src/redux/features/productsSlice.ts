import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  productFiltersType,
  productSliceInitialState,
} from "../../types/types";

const initialState: productSliceInitialState = {
  products: [],
  filters: {
    id:"",
    category: "All",
    company: "All",
    colors: [],
    price: 0,
    shipping: false,
    image: "",
    name:""
  },
  filteredProducts: [],
  // ili u funkciji napraviti
};

// filters[key].value
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productFiltersType[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string }>
    ) => {
      const { key, value } = action.payload;
      // currentCompany Ikea
      console.log(key, value);
      if (value === "All") {
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product[key] === (state.filters[key] = value)
        );
      }
    },
  },
});

export const { setProducts, setFilters } = productsSlice.actions;
export default productsSlice.reducer;
