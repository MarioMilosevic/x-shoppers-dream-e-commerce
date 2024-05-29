import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
import { singleProductType } from "../../types/types";

type CartState = {
  cart: singleProductType[];
  totalPrice: number;
  totalQuantity: number;
};

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<singleProductType>) => {
      state.cart.push(action.payload);
      state.totalQuantity += action.payload.quantity;
    },
    incrementCartQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    decrementCartQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart
        .map((product) =>
          product.id === action.payload && product.quantity > 0
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0);
      // moram nac total quantity
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
