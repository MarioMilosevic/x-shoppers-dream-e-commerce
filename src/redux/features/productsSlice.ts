import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ProductState, filtersType } from "../../types/types";


const initialState: ProductState[] = []

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: ( state, action: PayloadAction<ProductState[]>) => {
      return action.payload
    },
    filterProducts: (state, action: PayloadAction<filtersType>) => {
      const {key, value} = action.payload
      const filteredArray = state.filter(product => product[key] === value)
      return filteredArray
    }
  },
});

export const { setProducts, filterProducts } = productsSlice.actions;
export default productsSlice.reducer;

// 1 da imam objekat koji ima te propertije
// 2 da napravim funckiju setFilter koja prima payload
// destrukturujem {key,value} = action.payload
// key bi bio ime propertija a value bi bila vrijednost
// i tu nesto setujem da se to apdejtuje nemam pojma

// 3. samo returnam setFilter
