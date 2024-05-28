import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { singleProductType } from "../../types/types";

type CartState = {
  cart: singleProductType[];
  totalPrice: number;
  totalQuantity: number;
};

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
  totalQuantity:0
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<singleProductType>) => {
      state.cart.push(action.payload);
    },
    incrementProductQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, incrementProductQuantity ,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
