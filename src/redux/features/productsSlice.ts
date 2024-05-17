import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductState, productFiltersType } from "../../types/types";

const initialState: ProductState[] = [];

const filters = {
  currentCategory: "All",
  currentCompany: "All",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductState[]>) => {
      return (state = action.payload);
    },
    filterCompany: (state, action: PayloadAction<productFiltersType>) => {
      const { category, company } = action.payload;
      return state.filter((product) => product[category] === company);
    },
    filterCategory: (state, action: PayloadAction<string>) => {
      const filteredArray = state.filter(
        (product) => product.category === action.payload
      );
      return filteredArray;
    },
  },
});

export const { setProducts, filterCategory, filterCompany } =
  productsSlice.actions;
export default productsSlice.reducer;
