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
      console.log(key);
      console.log(value);
      // company Ikea
      state.filters[key] = value;
      // ukoliko state.filters[key] === false ?
      let filteredProducts = [...state.products];

      if (state.filters.company === "All" && state.filters.category === "All") {
        console.log("uslo u prvi if RESET");
        state.filteredProducts = state.products;
        return;
      }

      if (state.filters.company === "All" && state.filters[key] === value) {
        console.log("ako je kompany all");
        console.log(state.filters[key]);
        console.log(value);
        console.log(filteredProducts);
        filteredProducts = filteredProducts.filter(
          (product) => product[key] === value
        );
        // odje vrati prazan []
        console.log(filteredProducts);
        state.filteredProducts = filteredProducts;
        // ODJE MI JE BAG
      }

      if (state.filters.category === "All" && state.filters.company !== "All") {
        console.log("ako je category All a company nije All");
        filteredProducts = filteredProducts.filter(
          (product) => product.company === state.filters.company
        );
        state.filteredProducts = filteredProducts;
        // i odje je bag
      }

      if (state.filters[key] === key) {
        console.log("uslo u treci if");
        console.log(state.filters[key]);
        console.log(key);
        state.filteredProducts = filteredProducts.filter(
          (product) => product[key] === value
        );
      }

      if (state.filters.company !== "All" && state.filters.category !== "All") {
        console.log(state.filters.category);
        console.log(state.filters.company);
        console.log("oba nisu all");
        filteredProducts = state.products.filter((product) => {
          const companyMatches = product.company === state.filters.company;
          const categoryMatches = product.category === state.filters.category;
          // console.log(companyMatches)
          // console.log(categoryMatches)
          return companyMatches && categoryMatches;
        });
        state.filteredProducts = filteredProducts;
      }

      // if (value === "All") {
      //   console.log("uslo u prvi if");
      //   state.filteredProducts = state.products;
      // }
      //////////////////////////////////////////////////////////////////////////////////////////////////
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
