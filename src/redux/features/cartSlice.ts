import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { singleProductType } from "../../types/types";

type CartState = {
  cart: singleProductType[];
};

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<singleProductType>) => {
      const { id, selectedColor, quantity } = action.payload;
      const existingProduct = state.cart.find(
        (product) =>
          product.id === id && product.selectedColor === selectedColor
      );
      existingProduct
        ? (existingProduct.quantity += quantity)
        : state.cart.push(action.payload);
    },
    incrementCartQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart
        .map((product) => {
          if (
            product.customId === action.payload &&
            product.quantity < product.stock
          ) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        })
        .filter((product) => product.quantity > 0);
    },
    decrementCartQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart
        .map((product) =>
          product.customId === action.payload && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
