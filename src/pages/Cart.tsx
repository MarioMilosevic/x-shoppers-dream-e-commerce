import { useCartSlice } from "../hooks/useCartSlice";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";
const Cart = () => {
  const { cart, totalQuantity } = useCartSlice();

  if (!totalQuantity) console.log(cart);
  return !totalQuantity ? <EmptyCart /> : <FilledCart />;
};

export default Cart;
