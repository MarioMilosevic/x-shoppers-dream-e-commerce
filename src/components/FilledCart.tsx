import ChosenProduct from "./ChosenProduct";
import Button from "./Button";
import { useCartSlice } from "../hooks/useCartSlice";
import { useNavigate } from "react-router";
import { clearCart } from "../redux/features/cartSlice";
import { useDispatch } from "react-redux";
import { shippingFee } from "../utils/constants";
import { getTotalCartPrice } from "../redux/features/cartSlice";
import { useSelector } from "react-redux";

const FilledCart = () => {
  const { cart } = useCartSlice();
  const totalPrice = useSelector(getTotalCartPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="lg:max-w-[1200px] mx-auto pt-16 pb-32 px-4 lg:px-0">
      <div className="hidden lg:flex justify-between border-b border-b-neutral-400 py-8">
        <div className="lg:w-[224px] flex justify-center">Item</div>
        <div>Price</div>
        <div>Quantity</div>
        <div className="mr-32">Subtotal</div>
      </div>
      <ul className="border-b border-b-neutral-500 flex flex-col gap-8 py-16">
        {cart.map((product) => (
          <ChosenProduct key={product.customId} product={product} />
        ))}
      </ul>
      <div className="flex justify-between items-center pt-12 pb-16">
        <Button color="purple" buttonHandler={() => navigate("/products")}>
          Continue Shopping
        </Button>
        <Button color="red" buttonHandler={() => dispatch(clearCart())}>
          Clear Shopping Cart
        </Button>
      </div>
      <div className="flex flex-col items-center sm:items-end">
        <div className="lg:p-8 p-4 flex flex-col gap-4 border border-neutral-400 rounded-md">
          <div className="grid  grid-cols-[60%_auto] place-items-center lg:place-items-stretch lg:grid-cols-[75%_auto] w-[400px] font-semibold">
            <h2>Subtotal:</h2>
            <span>{`$${totalPrice / 100}`}</span>
          </div>
          <div className="grid grid-cols-[60%_auto] place-items-center lg:place-items-stretch lg:grid-cols-[75%_auto] w-[400px] font-light">
            <h3>Shipping fee:</h3>
            <span>{`$${shippingFee}`}</span>
          </div>
          <div className="border-t border-t-neutral-400 pt-8 pb-6 grid grid-cols-[65%_auto] place-items-center lg:place-items-stretch lg:grid-cols-[75%_auto] w-[400px] text-2xl font-semibold">
            <h2>Order Total:</h2>
            <span>{`$${(totalPrice / 100 + shippingFee).toFixed(2)}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilledCart;
