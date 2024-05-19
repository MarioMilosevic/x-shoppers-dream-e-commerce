import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { initialFilters } from "../../utils/constants";
import {
  productFiltersType,
  productSliceInitialState,
} from "../../types/types";

const initialState: productSliceInitialState = {
  products: [],
  filters: initialFilters,
  filteredProducts: [],
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
      action: PayloadAction<{ key: string; value: string | null }>
    ) => {
      const { key, value } = action.payload;
      // console.log(key);
      // console.log(value);
      // company Ikea
      state.filters[key] = value;
      // ukoliko state.filters[key] === false ?
      let filteredProducts = [...state.filteredProducts];

      if (state.filters.company === "All" && state.filters.category === "All") {
        state.filteredProducts = state.products
      }



      // if (value === "All") {
      //   console.log("uslo u prvi if");
      //   state.filteredProducts = state.products;
      // }
      if (value !== "All") {
        // console.log("uslo u drugi if");
        filteredProducts = filteredProducts.filter(
          (product) => product[key] === value
        );
        state.filteredProducts = filteredProducts;
      }
      //////////////////////////////////////////////////////////////////////////////////////////////////
      // if (state.filters.category && key === "category") {
      //   filteredProducts = filteredProducts.filter(
      //     (product) => product.category === value
      //   );
      // }

      if (state.filters[key] === key) {
        // console.log(state.filters[key]);
        // console.log(key);
        filteredProducts = filteredProducts.filter(
          (product) => product[key] === value
        );
      }

      // if (state.filters.company && key === "company") {
      //   filteredProducts = filteredProducts.filter(
      //     (product) => product.company === value
      //   );
      // }

      // state.filteredProducts = filteredProducts;
    },
  },
});

export const { setProducts, setFilters } = productsSlice.actions;
export default productsSlice.reducer;

// kada filterujem trebam svaki proizvod da pogledam i kazem da li je tvoj key === key od filtersObjekta

//   const { key, value } = action.payload;
//   console.log(key, value);
//   // dajem filters objektu vrijednost value koju je korisnik izabrao
//   state.filters[key] = value
//   //
//     state.filteredProducts = state.products.filter(
//       (product) => product[key] === state.filters[key]
//     );
// },
