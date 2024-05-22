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

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<productResponseType[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      state.filteredProducts = state.filteredProducts.sort(
        (a, b) => a.price - b.price
      );
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | null | boolean }>
    ) => {
      const { key, value } = action.payload;
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

      if (state.filters.color && state.filters.color !== "All") {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors.includes(state.filters.color)
        );
      }

      if (state.filters.search !== "") {
        filteredProducts = filteredProducts.filter((product) =>
          product.name.includes(state.filters.search)
        );
      }

      if (state.filters.price) {
        filteredProducts = filteredProducts.filter(
          (product) => product.price <= state.filters.price
        );
      }

      if (state.filters.shipping) {
        filteredProducts = filteredProducts.filter(
          (product) => product.shipping
        );
      }

      state.filteredProducts = filteredProducts;
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      state.filters.sort = action.payload
      
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
    clearFilters: (state) => {
      state.filteredProducts = state.products;
      state.filters = initialFilters;
    },
  },
});

export const { setProducts, setFilters, sortProducts, clearFilters } =
  productsSlice.actions;
export default productsSlice.reducer;
