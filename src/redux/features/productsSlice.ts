import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { initialFilters, FilterKeys } from "../../utils/constants";
import {
  productResponseType,
  productSliceInitialState,
} from "../../types/types";
import { sortProductsUtil } from "../../utils/helperFunctions";

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
      action: PayloadAction<{ key: FilterKeys; value: string | boolean | null }>
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
      state.filteredProducts = sortProductsUtil(
        filteredProducts,
        state.filters.sort
      );
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      state.filters.sort = action.payload;
      state.filteredProducts = sortProductsUtil(
        state.filteredProducts,
        action.payload
      );
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

// vidi breaking point na koji ti se lomi dizajn i
// na taj breaking point stavis da nisu vise u gridu elementi no flex column
// filteri nek budu absolute, sakrij ih
// dodaj neki hamburger dugme na klik dugmeta translate x 100% (filtere da se vide)

// https://react-course-comfy-sloth-store.netlify.app/products
