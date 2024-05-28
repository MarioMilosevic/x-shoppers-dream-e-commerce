import { CartQuantityControlProps } from "../types/types";
import { incrementProductQuantity } from "../redux/features/cartSlice";
import { useCartSlice } from "../hooks/useCartSlice";
const CartQuantityControl = ({
   quantity,
   incrementProductQuantity,
   decrementProductQuantity,
  // id,
}: CartQuantityControlProps) => {
  const { cart } = useCartSlice();
  console.log(cart)
  // const { quantity } = cart.find((item) => item.id === id) || {
  //   quantity: 1,
  // };

  return (
    <div className="flex justify-between text-3xl items-center">
      <button onClick={decrementProductQuantity}>-</button>
      <span className="font-semibold text-4xl">{quantity}</span>
      <button onClick={incrementProductQuantity}>+</button>
    </div>
  );
};

export default CartQuantityControl;
