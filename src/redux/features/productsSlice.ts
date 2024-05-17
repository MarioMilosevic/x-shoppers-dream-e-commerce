import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductState, productFiltersType } from "../../types/types";

const initialState = {
  products: [],
  filters: {
    currentCategory: "All",
    currentCompany: "All",
    colors: [],
    price: 0,
    shipping: false,
  },
  filteredProducts: []
  // ili u funkciji napraviti
};

// filters[key].value
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductState[]>) => {
       state.products = action.payload;
    },
    // filterCompany: (state, action: PayloadAction<productFiltersType>) => {
    //   const { category, company } = action.payload;
    //   return state.filter((product) => product[category] === company);
    // },
    // filterCategory: (state, action: PayloadAction<string>) => {
    //   const filteredArray = state.filter(
    //     (product) => product.category === action.payload
    //   );
    //   return filteredArray;
    // },
  },
});



export const { setProducts } =
  productsSlice.actions;
export default productsSlice.reducer;
