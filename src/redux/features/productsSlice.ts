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
      state.filters[key] = value;

      let filteredProducts = [...state.filteredProducts];

      if (key === "All") return (state.filteredProducts = state.products);

      filteredProducts = filteredProducts.filter(
        (product) => product[key] === value
      );

      // if (state.filters.category && key === "category") {
      //   filteredProducts = filteredProducts.filter(
      //     (product) => product.category === value
      //   );
      // }
      // if (state.filters.company && key === "company") {
      //   filteredProducts = filteredProducts.filter(
      //     (product) => product.company === value
      //   );
      // }

      state.filteredProducts = filteredProducts;
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
