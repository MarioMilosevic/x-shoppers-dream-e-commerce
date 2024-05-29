import { useCartSlice } from "../hooks/useCartSlice";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";
const Cart = () => {
  const { totalQuantity, cart } = useCartSlice();
  console.log(totalQuantity)
  console.log(cart)
  return totalQuantity > 0 ? <FilledCart /> : <EmptyCart />;
};

export default Cart;
