import { CartQuantityControlProps } from "../types/types";
import { useCartSlice } from "../hooks/useCartSlice";
const CartQuantityControl = ({
   quantity,
   incrementProductQuantity,
  decrementProductQuantity,
   id
}: CartQuantityControlProps) => {
  const { cart } = useCartSlice()
  console.log(cart)
  console.log(incrementProductQuantity)
  console.log(id)

  return (
    <div className="flex justify-between text-3xl items-center">
      <button onClick={decrementProductQuantity}>-</button>
      <span className="font-semibold text-4xl">{quantity}</span>
      <button onClick={incrementProductQuantity}>+</button>
    </div>
  );
};

export default CartQuantityControl;
