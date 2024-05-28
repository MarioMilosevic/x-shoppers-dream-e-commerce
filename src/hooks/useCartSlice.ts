import { useSelector } from "react-redux";
import { RootState } from "../redux/store/store";

export const useCartSlice = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return cart;
};
