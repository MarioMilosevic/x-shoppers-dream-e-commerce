import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../redux/features/cartSlice";

const Cart = () => {
  const totalQuantity = useSelector(getTotalCartQuantity);
  return totalQuantity > 0 ? <FilledCart /> : <EmptyCart />;
};

export default Cart;
