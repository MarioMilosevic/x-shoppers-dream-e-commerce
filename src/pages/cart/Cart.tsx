import EmptyCart from "../../components/EmptyCart";
import FilledCart from "../../components/FilledCart";
import { getTotalCartQuantity } from "../../redux/features/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
  const totalQuantity = useSelector(getTotalCartQuantity);
  return totalQuantity > 0 ? <FilledCart /> : <EmptyCart />;
};

export default Cart;
