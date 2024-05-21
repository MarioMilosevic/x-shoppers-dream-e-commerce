import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { initialFilters } from "../../utils/constants";
import {
  productResponseType,
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
    setProducts: (state, action: PayloadAction<productResponseType[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null }>
    ) => {
      const { key, value } = action.payload;
      console.log(key)
      console.log(value)

      state.filters[key] = value;
      let filteredProducts = [...state.products];

      if (state.filters.company && state.filters.company !== "All") {
        filteredProducts = filteredProducts.filter(
          (product) => product.company === state.filters.company
        );
      }
      if (state.filters.category && state.filters.category !== "All") {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === state.filters.category
        );
      }

      if (state.filters.color && state.filters.color !== "") {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors.includes(state.filters.color)
        );
      }

      state.filteredProducts = filteredProducts;

      // "#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900";
      // crvena,    zelena,     plava      crna,    zuta

      // if (state.filters.company === "All" && state.filters.category === "All") {
      //   state.filteredProducts = state.products;
      //   return;
      // }

      // if (state.filters.company === "All" && state.filters.category !== "All") {
      //   filteredProducts = filteredProducts.filter(
      //     (product) => product.category === state.filters.category
      //   );
      //   state.filteredProducts = filteredProducts;
      // }

      // if (state.filters.category === "All" && state.filters.company !== "All") {
      //   filteredProducts = filteredProducts.filter(
      //     (product) => product.company === state.filters.company
      //   );
      //   state.filteredProducts = filteredProducts;
      // }

      // if (state.filters.company !== "All" && state.filters.category !== "All") {
      //   filteredProducts = state.products.filter((product) => {
      //     const companyMatches = product.company === state.filters.company;
      //     const categoryMatches = product.category === state.filters.category;
      //     return companyMatches && categoryMatches;
      //   });
      //   state.filteredProducts = filteredProducts;
      // }
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      if (action.payload === "lowest") {
        state.filteredProducts.sort((a, b) => a.price - b.price);
      }
      if (action.payload === "highest") {
        state.filteredProducts.sort((a, b) => b.price - a.price);
      }
      if (action.payload === "a-z") {
        state.filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload === "z-a") {
        state.filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
  },
});

export const { setProducts, setFilters, sortProducts } = productsSlice.actions;
export default productsSlice.reducer;
