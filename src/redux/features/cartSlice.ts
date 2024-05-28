import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { singleProductType } from "../../types/types";

type CartState = {
  cart: singleProductType[];
  totalPrice: number;
};

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
