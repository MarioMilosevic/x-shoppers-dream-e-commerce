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
      state.totalPrice += action.payload.price * action.payload.quantity
    },
    incrementCartQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart
        .map((product) => {
          if (product.id === action.payload) {
            state.totalQuantity += 1;
            state.totalPrice += product.price;
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        })
        .filter((product) => product.quantity > 0);
    },
    decrementCartQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart
        .map((product) => {
          if (product.id === action.payload && product.quantity > 1) {
            state.totalQuantity -= 1;
            state.totalPrice -= product.price;
            return { ...product, quantity: product.quantity - 1 };
          }
          return product;
        })
        .filter((product) => product.quantity > 0);
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        state.totalQuantity -= product.quantity;
        state.totalPrice -= product.price * product.quantity;
      }
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);

export const {
  addToCart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeProduct,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
