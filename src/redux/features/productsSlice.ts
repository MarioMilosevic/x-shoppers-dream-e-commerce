import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductState, productFiltersType } from "../../types/types";
import { RootState } from "../store/store";
export const startFilters: productFiltersType = {
  currentCategory: "All",
  currentCompany: "All",
  // colors: [],
  // price: 0,
  // shipping: false,
};
const initialState: ProductState[] = [];

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductState[]>) => {
      return action.payload;
    },
    setFilters: (state, action: PayloadAction<productFiltersType>) => {
      console.log("iz setPFilters", action.payload);
      const { category, company } = action.payload;
      const filteredArray = state.filter(
        (product) => product[category] === company
      );
      console.log("filtrirani iz slajsa", filteredArray);
      return filteredArray;
    },
  },
});

export const { setProducts, setFilters } = productsSlice.actions;
export default productsSlice.reducer;

// 1 da imam objekat koji ima te propertije
// 2 da napravim funckiju setFilter koja prima payload
// destrukturujem {key,value} = action.payload
// key bi bio ime propertija a value bi bila vrijednost
// i tu nesto setujem da se to apdejtuje nemam pojma

// 3. samo returnam setFilter
